import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  if (!produto) return <div className="container mx-auto p-6">Carregando...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
 
        <div className="w-full lg:w-1/2">
          <img src={produto.foto} alt={produto.nome} className="w-full h-80 object-cover rounded-lg" />
        </div>


        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">{produto.nome}</h1>
          <p className="text-gray-700 text-lg">{produto.descricao}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Preço:</span>
              <span className="text-xl text-blue-600">R${produto.preco}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Duração:</span>
              <span>{produto.duracao} horas</span>
            </div>
          </div>


          <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Inscreva-se agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
