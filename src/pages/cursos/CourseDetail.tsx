import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Produto from '../../models/Produto';
import { listar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [produto, setProduto] = useState<Produto | null>(null);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    async function fetchProduto() {
      try {
        await listar(`/produtos/${id}`, setProduto, {headers: {Authorization: token}}); 
      } catch (error) {
        console.error('Erro ao buscar o curso', error);
      }
    }

    fetchProduto();
  }, [id]); 

  if (!produto) {
    return <div className="container mx-auto p-6">Carregando...</div>;
  };

  return (
    <>
      <div className="container w-full px-6 lg:px-12 py-10 lg:py-32">
        <div className="flex flex-col px-10 py-12 lg:flex-row lg:space-x-8 bg-gray-300 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg">
          <div className="w-full lg:w-1/2">
            <img src={produto.foto} alt={produto.nome} className="w-full h-auto object-cover rounded-lg lg:rounded-none lg:rounded-l-lg" />
          </div>
          <div className="w-full lg:w-1/2 p-6 flex flex-col space-y-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">{produto.nome}</h1>
            <p className="text-gray-700 text-base lg:text-lg">{produto.descricao}</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800">Preço:</span>
                <span className="text-xl text-blue-600">R${produto.preco}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800">Duração:</span>
                <span>{produto.duracao} horas</span>
              </div>
            </div>
            <Link to="/contato" className="text-blue-600 hover:underline">
            <button className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
              Inscreva-se agora
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
