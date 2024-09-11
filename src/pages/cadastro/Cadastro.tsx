import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";

export default function Cadastro() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    // tipoUsuario: "",
  });

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário Cadastrado com Sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert("Dados inconsistentes! Verifique as informações do Cadastro.");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507738978512-35798112892c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Caminho da imagem
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10 max-x-md flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-24">
        {/* Seção do Formulário */}
        <div className="relative z-10 bg-white/30 backdrop-blur-xl mt-2 rounded-3xl p-8 shadow-lg w-full max-w-md">
          <div className="text-center">
            <img
              alt="Logo Minerva"
              src="./logo.png"
              className="mx-auto h-16 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Crie sua conta
            </h2>
          </div>

          <form className="space-y-6" onSubmit={cadastrarNovoUsuario}>
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-600"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                autoComplete="nome"
                className="block w-full mt-1 p-2 border rounded-full border-gray-300 bg-white/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                value={usuario.nome}
                onChange={atualizarEstado}
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-gray-600"
              >
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full mt-1 p-2 border rounded-full border-gray-300 bg-white/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                value={usuario.senha}
                onChange={atualizarEstado}
              />
            </div>

            <div>
              <label
                htmlFor="confirmar-senha"
                className="block text-sm font-medium text-gray-600"
              >
                Confirmar Senha
              </label>
              <input
                id="confirmar-senha"
                name="confirmar-senha"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full mt-1 p-2 border rounded-full border-gray-300 bg-white/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                value={confirmaSenha}
                onChange={handleConfirmarSenha}
              />
            </div>

            <div>
              <label
                htmlFor="usuario"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="usuario"
                name="usuario"
                type="text"
                required
                autoComplete="usuario"
                className="block w-full mt-1 p-2 border rounded-full border-gray-300 bg-white/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                onChange={atualizarEstado}
              />
            </div>

            <div>
              <label
                htmlFor="foto"
                className="block text-sm font-medium  text-gray-600"
              >
                Foto
              </label>
              <input
                id="foto"
                name="foto"
                type="text"
                required
                className="block w-full mt-1 p-2 border rounded-full border-gray-300 bg-white/50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                value={usuario.foto}
                onChange={atualizarEstado}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="relative py-2 px-8 mt-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition duration-200 mx-auto"
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  "Cadastrar"
                )}
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-800">
            Seja bem-vindo!{" "}
          </p>
        </div>
      </div>

      <footer className="relative z-10 mt-19 py-4 text-center text-gray-500"></footer>
    </div>
  );
}
