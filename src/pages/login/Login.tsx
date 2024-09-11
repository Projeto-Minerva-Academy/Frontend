import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";

export default function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden ">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1507738978512-35798112892c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Caminho da imagem
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Seção de login com efeito glass */}
      <div className="relative z-10 bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-lg w-full max-w-md mt-20">
        <div className="text-center">
          <img
            alt="Logo Minerva"
            src="./logo.png"
            className="mx-auto h-16 w-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Login Minerva</h2>
        </div>

        <form className="space-y-6" onSubmit={login}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="usuario"
              className="w-full mt-1 p-3 border border-gray-300 bg-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Senha
            </label>
            <input
              type="password"
              name="senha"
              className="w-full mt-1 p-3 border border-gray-300 bg-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              required
            />
          </div>

          <button
            type="submit"
            className="ml-36 py-2 px-8 mt-4 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-200"
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
              "Entrar"
            )}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-800">
              Não tem conta?{" "}
              <Link to="/cadastrar" className="text-blue-700 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute inset-x-0 h-px text-white"></span>
          </div>

          <button
            type="button"
            className="w-full mb-2 flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3670/3670042.png"
              alt="Facebook"
              className="h-5 w-5"
            />
            Entrar com Facebook
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
              alt="Google"
              className="h-5 w-5"
            />
            Entrar com Google
          </button>
        </div>
      </div>

      {/* Footer com espaçamento */}
      <footer className="relative z-10 mt-20 py-4 text-center text-white">
      </footer>
    </div>
  );
}
