import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../models/Produto";

interface CourseCardProps {
  produto: Produto;
}

const CourseCard: React.FC<CourseCardProps> = ({ produto }) => {
  return (
    <div className="w-60 ml-2 mr-20 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-auto">
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
          <p className="text-gray-700 flex-grow overflow-hidden text-sm">
          {produto.descricao}
        </p>
          <div className="mt-2">
            <div className="bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm flex items-center justify-between">
              <span className="font-medium">Duração</span>
              <span>{produto.duracao}h</span>
            </div>
            <div className="mt-2 bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm flex items-center justify-between">
            <span className="font-medium">Valor</span>
            <span>R${produto.preco}</span>
          </div>
          <button className="w-full mt-2 bg-gradient-to-r from-blue-400 to-green-400 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
