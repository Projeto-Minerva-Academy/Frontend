import { useState } from "react";
import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-80'}`}>
      <div className="bg-sky-700 text-white p-4 flex flex-col flex-grow">
        <h3 className="bg-sky-500 text-xl font-bold p-4 rounded-lg text-center">{categoria.tipo}</h3>
        <div className="relative flex flex-col flex-grow">
          <p 
            className={`px-2 py-4 text-md font-medium ${isExpanded ? '' : 'line-clamp-3'} overflow-hidden`}
            style={{ maxHeight: isExpanded ? 'none' : '6rem' }}
          >
            {categoria.descricao}
          </p>
          <button
            onClick={toggleExpand}
            className="absolute bottom-2 left-2 text-blue-500 hover:underline"
          >
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      </div>
      <div className="flex justify-around p-4 bg-white gap-2">
        <Link to={`/atualizarCategoria/${categoria.id}`} className="w-full">
          <button className="w-full py-2 px-4 text-blue-400 border border-blue-500 rounded-lg hover:bg-blue-300 hover:text-white transition duration-300">
            Editar
          </button>
        </Link>
        <Link to={`/deleteCategoria/${categoria.id}`} className="w-full">
          <button className="w-full py-2 px-4 text-blue-400 border border-blue-500 rounded-lg hover:bg-blue-300 hover:text-white transition duration-300">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardCategoria;
