import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";

function FormProduto() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutoPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function buscarCategorias() {
    try {
      await listar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Produto atualizada com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Produto cadastrada com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a Produto", "erro");
        }
      }
    }

    retornar();
  }

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h2 className="text-2xl font-bold mb-6">
        {id === undefined ? "Cadastrar novo produto" : "Editar produto"}
      </h2>
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={gerarNovoProduto}>
          <label htmlFor="nome" className="text-lg font-semibold">
            Nome do produto
          </label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={produto.nome || ""}
            onChange={atualizarEstado}
          />
          <label htmlFor="descricao" className="text-lg font-semibold">
            Descrição
          </label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={produto.descricao || ""}
            onChange={atualizarEstado}
          />
          <label htmlFor="preco" className="text-lg font-semibold">
            Preço
          </label>
          <input
            type="number"
            placeholder="Preço"
            name="preco"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={produto.preco || ""}
            onChange={atualizarEstado}
          />
          <label htmlFor="duracao" className="text-lg font-semibold">
            Duração
          </label>
          <input
            type="number"
            placeholder="Duração"
            name="duracao"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={produto.duracao || ""}
            onChange={atualizarEstado}
          />
          <label htmlFor="foto" className="text-lg font-semibold">
            Foto
          </label>
          <input
            type="text"
            placeholder="URL da foto"
            name="foto"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={produto.foto || ""}
            onChange={atualizarEstado}
          />
          <label htmlFor="categoria" className="text-lg font-semibold">
            Categoria
          </label>
          <select
            name="categoria"
            id="categoria"
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Categoria
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.descricao}</option>
              </>
            ))}
          </select>

          <button
            type="submit"
            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {id === undefined ? "Cadastrar" : "Editar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;
