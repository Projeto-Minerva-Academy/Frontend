import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import "./Cadastro.css";
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

  console.log(usuario);
  console.log(confirmaSenha);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-row justify-center px-6 py-12 lg:px-8 mt-4 mb-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm my-20">
          <img
            alt="Your Company"
            src="./public/logo.png"
            className="mx-auto h-2/6 w-auto"
          />
          <h2 className="my-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>
          <p className="text-center tracking-tight  text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            suscipit adipisci. Similique natus impedit omnis, aliquam, nesciunt
            sapiente at debitis quo commodi est quod quas necessitatibus
            blanditiis. Architecto, at et?
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={cadastrarNovoUsuario}>
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="nome"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="foto"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Foto
              </label>
              <div className="mt-2">
                <input
                  id="foto"
                  name="foto"
                  type="text"
                  required
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  value={usuario.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmar senha
              </label>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="usuario"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="usuario"
                  name="usuario"
                  type="text"
                  required
                  autoComplete="usuario"
                  className="block w-full rounded-full py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-400 sm:text-sm sm:leading-6"
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
                  <span>Cadastrar</span>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Seja bem-vindo!{" "}
          </p>
        </div>
      </div>
    </>
  );
}
