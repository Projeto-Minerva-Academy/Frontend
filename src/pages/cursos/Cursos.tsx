import { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import Produto from "../../models/Produto";
import { listar } from "../../services/Service";
import CourseCard from "../../components/coursecard/CourseCard";
import Sidebar from "../../components/sidebar/Sidebar";

const Cursos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const courseTypes = [
    { value: "programming", label: "Programação" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
  ];

  const topics = [
    { value: "web-development", label: "Desenvolvimento Web" },
    { value: "data-science", label: "Ciência de Dados" },
    { value: "ux-ui", label: "UX/UI" },
    { value: "digital-marketing", label: "Marketing Digital" },
  ];

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
      <div className="container px-6 py-8 mx-auto">
        <h1 className="mt-20 text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
         Todos os Cursos disponíveis na nossa plataforma
        </h1>

        <p className="mt-2 mb-20 text-base text-gray-700 md:text-lg">
          Confira todos os cursos que oferecemos por um valor que você pode
          pagar!
        </p>
        <div className="flex">
          <Sidebar courseTypes={courseTypes} topics={topics} />
          <main className="flex-1 p-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {produtos.map((produto) => (
                <CourseCard
                  key={produto.id}
                  produto={produto} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
