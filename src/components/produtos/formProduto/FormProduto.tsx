import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";

function FormPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: "", tipo: "" });
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
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

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

    setIsLoading(false);
    retornar();
  }

  const carregandoTema = categoria.descricao === "";

  return (
    <div className="flex flex-col items-center mx-auto container">
      <h1 className="my-8 text-4xl text-center">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form className="flex flex-col gap-4 w-1/2" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Titulo"
            name="nome"
            required
            className="border-2 border-slate-700 p-2 rounded"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Descricao</label>
          <input
            type="text"
            placeholder="Descricao"
            name="descricao"
            required
            className="border-2 border-slate-700 p-2 rounded"
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria da Produto</p>
          <select
            name="categoria"
            id="categoria"
            className="border-slate-800 p-2 border rounded"
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
        </div>
        <button
          type="submit"
          className="flex justify-center bg-indigo-400 hover:bg-indigo-800 disabled:bg-slate-200 mx-auto py-2 rounded w-1/2 font-bold text-white"
          disabled={carregandoTema}
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
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
