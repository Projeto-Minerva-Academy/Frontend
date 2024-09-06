import CardCategoria from "../cardCategoria/CardCategoria";
import { useContext, useEffect, useState } from "react";
import { listar } from "../../../services/Service";
import { Link, useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { Grid } from "react-loader-spinner";

function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await listar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 my-20">
        <div className="flex justify-center mb-6">
          {categorias.length === 0 && (
            <Grid
              visible={true}
              height="150"
              width="150"
              color="#2795B7"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
          )}
        </div>
        <div className="flex justify-end mb-6">
          <Link to="/cadastrarCategoria">
            {categorias.length !== 0 && (
              <button className="py-2 px-6 bg-blue-400 text-white rounded-lg border border-blue-500 hover:bg-blue-500 transition duration-300">
                Nova Categoria
              </button>
            )}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListarCategoria;
