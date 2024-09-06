import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

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
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-4 mb-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
          <img
            alt="Logo Minerva"
            src="./public/logo.png"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Minerva
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  placeholder="Usuario"
                  required
                  autoComplete="email"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  value={usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-500 hover:text-indigo-500"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative py-2 px-8 mt-4 text-white text-base nded-full overflow-hidden bg-blue-400 rounded-full hover:text-white hover:bg-blue-500"
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
                  <span>Entrar</span>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Ainda não tem conta?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-blue-500 hover:text-indigo-500"
            >
              <Link to="/cadastrar" className="text-indigo-800 hover:underline">
                Cadastre-se
              </Link>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
