import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardProduto from "../cardProduto/CardProduto";
import Produto from "../../../models/Produto";
import { listar, deletar } from "../../../services/Service";

function ListaProdutos() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await listar('/produtos', setProdutos, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            ToastAlerta('Produto excluído com sucesso', 'sucesso');
            setProdutos(prevProdutos => prevProdutos.filter(produto => produto.id !== id));
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao excluir o Produto', 'erro');
            }
        }
    };

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        } else {
            buscarProdutos();
        }
    }, [token]);

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 my-20'>
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => navigate('/cadastrarproduto')}
                        className="py-2 px-6 bg-blue-400 text-white rounded-lg border border-blue-500 hover:bg-blue-500 transition duration-300"
                    >
                        Cadastrar Novo Produto
                    </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-4'>
                    {produtos.map((produto) => (
                        <CardProduto
                            key={produto.id}
                            produto={produto}
                            token={token}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;
