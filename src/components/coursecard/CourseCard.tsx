import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../models/Produto";

interface CourseCardProps {
  produto: Produto;
}



const CourseCard: React.FC<CourseCardProps> = ({ produto }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  return (
    <div className={`w-auto ml-2 mr-20 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col ${isExpanded ? 'h-auto' : 'h-full'}`}>
      <Link to={`/curso/${produto.id}`} className="block">
        <img
          src={produto.foto}
          alt={produto.nome}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Curso</span> /{" "}
            <span className="font-semibold text-blue-600">
            {produto.categoria?.tipo}
          </span>
          </div>
          <h2 className="text-lg font-semibold mb-2">
            <span className="text-blue-700 hover:underline" title={`Acessar o conteúdo ${produto.nome}`}>
              {produto.nome}
            </span>
          </h2>
          <p className={`px-2 py-4 text-md font-medium ${isExpanded ? '' : 'line-clamp-3'} overflow-hidden`}
            style={{ maxHeight: isExpanded ? 'none' : '6rem' }}>

          {produto.descricao}

        </p>
        <div>
        <button
            onClick={toggleExpand}
            className="absolute bottom-2 left-2 text-blue-500 hover:underline"
          >
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
          <div className="mt-2">
            <div className="bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm flex items-center justify-between">
              <span className="font-medium">Duração</span>
              <span>{produto.duracao}h</span>
            </div>
            <div className="mt-2 bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm flex items-center justify-between">
            <span className="font-medium">Valor</span>
            <span>R${produto.preco}</span>
          </div>
          {/* <button className="w-full mt-2 bg-gradient-to-r from-blue-400 to-green-400 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
            Adicionar ao Carrinho
          </button> */}
        </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
