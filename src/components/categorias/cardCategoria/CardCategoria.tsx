import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-800 overflow-hidden">
      <div className="bg-blue-300 text-white p-4">
        <h3 className="text-xl font-bold">{categoria.tipo}</h3>
        <h4 className="text-xs font-medium">{categoria.descricao}</h4>
      </div>
      <div className="flex justify-around p-2 bg-gray-100 gap-2">
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
}

export default CardCategoria;