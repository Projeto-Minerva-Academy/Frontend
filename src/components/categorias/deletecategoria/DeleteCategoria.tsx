import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, listar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeleteCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [ , setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            console.error('Erro ao buscar categoria:', error);
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token, navigate]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/categorias');
    }

    async function deletarCategoria() {
        setIsLoading(true);
        console.log('Tentando deletar categoria com ID:', id);

        try {
            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token }
            });
            ToastAlerta('A Categoria foi apagada com sucesso!', 'sucesso');
        } catch (error: any) {
            console.error('Erro ao deletar categoria:', error);
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao Excluir a Categoria!', 'erro');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="flex flex-col justify-center items-center my-4">
            <h2 className="text-2xl font-bold mb-6">
                {id === undefined ? "Cadastrar Nova Categoria" : "Editar Categoria"}
            </h2>
            <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 w-full max-w-md">
                <form className="flex flex-col gap-4">
                    <label htmlFor="tipo" className="text-lg font-semibold">
                        Informações da Categoria
                    </label>
                    <span className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
                        {categoria.tipo}
                    </span>
                    <span className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200-black">
                        {categoria.descricao}
                    </span>
                    <span className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 transition duration-200-black">
                        ID = {categoria.id}
                    </span>

                    <div className="flex flex-row justify-around gap-2">
                        <button
                            className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 px-16"
                            onClick={deletarCategoria}
                            type="button" 
                        >
                            Sim
                        </button>
                        <button
                            className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 px-16"
                            onClick={retornar}
                            type="button" 
                        >
                            Não
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteCategoria;
