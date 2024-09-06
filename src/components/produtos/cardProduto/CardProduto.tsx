import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutosProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutosProps) {
    return (
        <div className="grid grid-cols-4 gap-6">
            <div className="relative max-w-[250px] h-[370px] bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                {/* Imagem do Produto */}
                <div className="relative w-full h-[36%]"> {/* Ajuste a altura para 32% */}
                    <img
                        src={produto.usuario?.foto} // Substitua pelo URL real da imagem
                        alt="Imagem do Produto"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Informações e Atributos do Produto */}
                <div className="p-3 flex flex-col justify-between flex-1">
                    <div className="text-xs text-gray-500 mb-2">
                        <span className="font-semibold">Curso</span> /{" "}
                        <span className="font-semibold text-blue-600">{produto.categoria?.tipo}</span>
                    </div>
                    <div id="nome_do_produto" className="text-sm font-bold mb-2">
                        <a
                            href="#"
                            className="text-blue-700 hover:underline"
                            title={`Acessar o conteúdo Pré-aceleração Sebrae Startups`}
                        >
                            Pré-aceleração Sebrae Startups{produto.nome}
                        </a>
                    </div>
                    <div id="atributos" className="text-xs mb-5 text-gray-700 flex flex-col gap-2">
                        <div className="bg-gray-100 border border-gray-300 p-1 rounded-lg shadow-sm flex items-center justify-between">
                            <span className="font-medium">Descrição:</span>
                            <span>Modelos de Negócio{produto.descricao}</span>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 p-1 rounded-lg shadow-sm flex items-center justify-between">
                            <span className="font-medium">Preço:</span>
                            <span>R$189,90{produto.preco}</span>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 p-1 rounded-lg shadow-sm flex items-center justify-between">
                            <span className="font-medium">Duração:</span>
                            <span>3h{produto.duracao}</span>
                        </div>
                    </div>
                    <div className="flex">
                        <Link to={`/editarproduto/${produto.id}`}
                            className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                               flex items-center justify-center py-2'>
                            <button>Editar</button>
                        </Link>
                        <Link to={`/deletarproduto/${produto.id}`}
                            className='text-white bg-red-400 
	                           hover:bg-red-700 w-full flex items-center justify-center'>
                            <button>Deletar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduto;
