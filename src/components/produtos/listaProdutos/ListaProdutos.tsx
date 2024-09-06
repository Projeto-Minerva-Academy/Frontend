import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardProduto from "../cardProduto/CardProduto";
import Produto from "../../../models/Produto";
import { listar } from "../../../services/Service";

function ListaProdutos() {

    const navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await listar('/produtos', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

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
            <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-4 container'>
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </>
    );
}

export default ListaProdutos;
