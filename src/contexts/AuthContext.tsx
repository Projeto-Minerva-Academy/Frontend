import { createContext, ReactNode, useState, useEffect } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  isMenuOpen: boolean; // Estado que indica se o menu está aberto
  toggleMenu: () => void; // Função para alternar o estado do menu
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

   // Função para alternar o estado do menu
   const toggleMenu = () => {
    setMenuOpen(prev => !prev); 
};

  useEffect(() => {
    // Recupera o token armazenado
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, (usuario: UsuarioLogin) => {
        setUsuario(usuario);
        localStorage.setItem('user', JSON.stringify(usuario)); // Armazena o usuário no localStorage
        ToastAlerta("Usuário logado com sucesso", "sucesso");
      });
    } catch (error) {
      console.log(error);
      ToastAlerta("Dados do usuário inconsistentes", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    localStorage.removeItem('user'); // Remove o usuário do localStorage
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading, isMenuOpen, toggleMenu }}
    >
      {children}
    </AuthContext.Provider>
  );
}