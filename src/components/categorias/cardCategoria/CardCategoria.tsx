import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="p-0 inline-block bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-auto">
      <div className="bg-sky-700 text-white p-4">
        <h3 className="bg-sky-500 text-xl font-bold p-4 rounded-lg text-center">{categoria.tipo}</h3>
        <h4 className="px-2 py-4 text-md font-medium">{categoria.descricao}</h4>
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
}

export default CardCategoria;