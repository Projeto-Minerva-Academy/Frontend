import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutosProps {
    produto: Produto;
    token: string;      
    onDelete: (id: number) => void; 
}

function CardProduto({ produto, onDelete }: CardProdutosProps) {
    return (
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
            
            <div className="relative w-full h-[200px]">
                <img
                    src={produto.usuario?.foto} 
                    alt="Imagem do Produto"
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-2">
                    <span className="font-semibold">Curso</span> /{" "}
                    <span className="font-semibold text-blue-600">{produto.categoria?.tipo}</span>
                </div>
                <div id="nome_do_produto" className="text-sm font-bold mb-2">
                    <a
                        href="#"
                        className="text-blue-700 hover:underline"
                        title={`Acessar o conteúdo ${produto.nome}`}
                    >
                        {produto.nome}
                    </a>
                </div>
                <div id="atributos" className="text-xs mb-5 text-gray-700 flex flex-col gap-2">
                    <div className="bg-gray-100 border border-gray-300 p-2 rounded-lg shadow-sm flex items-center justify-between">
                        <span className="font-medium">Descrição:</span>
                        <span>{produto.descricao}</span>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 p-2 rounded-lg shadow-sm flex items-center justify-between">
                        <span className="font-medium">Preço:</span>
                        <span>R${produto.preco}</span>
                    </div>
                    <div className="absolute bottom-1 bg-gray-100 border border-gray-300 p-2 rounded-lg shadow-sm flex items-center justify-between">
                        <span className="font-medium">Duração:</span>
                        <span>{produto.duracao}h</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Link to={`/editarproduto/${produto.id}`}
                        className='flex-1 text-slate-100 bg-indigo-400 hover:bg-indigo-800 py-2 rounded-md text-center'>
                        Editar
                    </Link>
                    <button
                        onClick={() => onDelete(produto.id)}  
                        className='flex-1 text-white bg-red-400 hover:bg-red-700 py-2 rounded-md text-center'>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduto;
