import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
    descricao: '',
    produto: []  // Coloquei todos os atributos da interface produto.
  });

  const [produto, setProduto] = useState<Produto>({} as Produto)

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarProdutoPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategorias, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token])

  useEffect(() => {
    buscarCategorias()

    if (id !== undefined) {
      buscarProdutoPorId(id)
    }
  }, [id])

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    })
  }, [categoria])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta('Produto atualizado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('401')) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao atualizar o Produto', 'erro')
        }
      }

    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlerta('Produto cadastrado com sucesso', 'sucesso');

      } catch (error: any) {
        if (error.toString().includes('401')) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao cadastrar o Produto', 'erro');
        }
      }
    }

    setIsLoading(false)
    retornar()
  }

  const carregandoCategoria = categoria.tipo === '';

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h2 className="text-2xl font-bold mb-6">
        {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
      </h2>

      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-lg font-semibold">
              Nome do produto
            </label>
            <input
              type="text"
              placeholder="Título"
              name="titulo"
              required
              className="border-2 border-slate-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="text-lg font-semibold">
              Descrição
            </label>
            <input
              type="text"
              placeholder="Descrição"
              name="texto"
              required
              className="border-2 border-slate-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco" className="text-lg font-semibold">
              Preço
            </label>
            <input
              type="number"
              placeholder="Preço"
              name="preco"
              className="py-1 px-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              value={produto.preco || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="duracao" className="text-lg font-semibold">
              Duração
            </label>
            <input
              type="number"
              placeholder="Duração"
              name="duracao"
              className="py-1 px-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              value={produto.duracao || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto" className="text-lg font-semibold">
              Foto
            </label>
            <input
              type="text"
              placeholder="URL da foto"
              name="foto"
              className="py-1 px-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              value={produto.foto || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="categoria" className="text-lg font-semibold">
              Categoria
            </label>
            <select name="tema" id="tema" className='border p-2 border-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200'
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" disabled>Selecione uma Categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.tipo}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='bg-indigo-400 text-white font-semibold rounded-lg py-1 px-3 w-full hover:bg-indigo-600 transition duration-300'
            disabled={carregandoCategoria}
          >
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="4"
                animationDuration="0.75"
                width="20"
                visible={true}
              /> :
              <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
            }
          </button>
        </form>
      </div>
    </div>

  );
}

export default FormProduto;