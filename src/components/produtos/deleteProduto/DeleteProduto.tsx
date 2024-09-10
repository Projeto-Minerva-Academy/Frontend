import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { listar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeleteProduto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [produto, setProduto] = useState<{ nome: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    } else {
      fetchProduto();
    }
  }, [id, token]);

  async function fetchProduto() {
    try {
      await listar(`/produtos/${id}`, (data: { nome: string }) => setProduto(data), {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
        navigate("/login");
      }
    }
  }

  async function handleDelete() {
    setIsLoading(true);
    try {
      await deletar(`/produtos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      ToastAlerta("Produto excluído com sucesso", "sucesso");
      navigate("/produtos");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
        navigate("/login");
      } else {
        ToastAlerta("Erro ao excluir o produto", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleCancel() {
    navigate("/produtos");
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container flex flex-col mx-auto items-center my-8">
      <h1 className="text-2xl mb-4">Excluir Produto</h1>
      {produto ? (
        <div>
          <p>Você realmente deseja excluir o produto?"{produto.nome}"?</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Excluir
            </button>
            <button
              onClick={handleCancel}
              className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
}

export default DeleteProduto;
