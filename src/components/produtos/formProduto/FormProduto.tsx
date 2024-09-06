import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";

function FormProduto() {
  const [produto, setProduto] = useState<Produto>({
    tipo: "",
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    duracao: 0,
    foto: "",
    categoria: null,
    usuario: null,
  });
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    } else {
      buscarCategorias();
      if (id !== undefined) {
        buscarProdutoPorId(id);
      }
    }
  }, [id, token]);

  useEffect(() => {
    if (categoriaSelecionada !== null) {
      setProduto({
        ...produto,
        categoria: categorias.find(c => c.id === categoriaSelecionada) || null,
      });
    }
  }, [categoriaSelecionada, categorias]);

  async function buscarProdutoPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategoriaSelecionada(produto.categoria?.id || null);
    } catch (error) {
      console.error("Erro ao carregar produto", error);
    }
  }

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Erro ao carregar categorias", error);
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: name === "preco" || name === "duracao" ? Number(value) : value,
      categoria: name === "categoria" ? categorias.find(c => c.id === Number(value)) || null : prevProduto.categoria,
      usuario: usuario,
    }));
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/produtos/${id}`, produto, setProduto, {
          headers: { Authorization: `Bearer ${token}` },
        });
        ToastAlerta("Produto atualizado com sucesso", "sucesso");
      } else {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: { Authorization: `Bearer ${token}` },
        });
        ToastAlerta("Produto cadastrado com sucesso", "sucesso");
      }
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao processar o produto", "erro");
    }
  }

  function retornar() {
    navigate("/produtos");
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
            className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            value={categoriaSelecionada || ""}
            onChange={atualizarEstado}
          >
            <option value="" disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
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
