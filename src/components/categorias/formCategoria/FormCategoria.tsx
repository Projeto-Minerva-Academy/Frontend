import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      async function buscarCategoria() {
        try {
          await listar(`/categorias/${id}`, setCategoria, {
            headers: { Authorization: token },
          });
        } catch (error) {
          console.error("Erro ao carregar categoria", error);
        }
      }
      buscarCategoria();
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria atualizada com sucesso", "sucesso");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria cadastrada com sucesso", "sucesso");
      }
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao processar a Categoria", "erro");
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h2 className="text-2xl font-bold mb-6">
        {id === undefined ? "Cadastrar Nova Categoria" : "Editar Categoria"}
      </h2>
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
          <label htmlFor="tipo" className="text-lg font-semibold">
            Tipo da Categoria
          </label>
          <input
            type="text"
            placeholder="Tipo"
            name="tipo"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={categoria.tipo || ""}
            onChange={atualizarEstado}
          />
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
          />

          <button
            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            {id === undefined ? "Cadastrar" : "Editar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
