import { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import Produto from "../../models/Produto";
import { listar } from "../../services/Service";
import CourseCard from "../../components/coursecard/CourseCard";

const Cursos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    async function fetchProdutos() {
      try {
        await listar("/produtos", setProdutos, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        }
      }
    }

    fetchProdutos();
  }, [token, handleLogout]);

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <h1 className="mt-20 main__title--gradient text-5xl font-size-12 font-bold">Cursos</h1>
          <p className="mt-2 mb-20 text-base text-gray-700 md:text-lg">
            Confira todos os cursos que oferecemos por um valor que você pode pagar!
          </p>
          <div className="lg:flex lg:-mx-2 mt-6">
            <div className="w-80 mr-1.5 lg:px-2 lg:space-y-4 p-4 py-6 px-6 rounded-lg border bg-gray-50 md:p-8">

            </div>

            <div className="items-center justify-between content-around grid grid-cols-3 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              {produtos.map((produto) => (
                <CourseCard
                  key={produto.id} 
                  produto={produto}  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
