import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/navbar/Navbar";
import ListarCategoria from "./components/categorias/listaCategoria/ListarCategoria";
import FormCategoria from "./components/categorias/formCategoria/FormCategoria";
import DeleteCategoria from "./components/categorias/deletecategoria/DeleteCategoria";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormProduto from "./components/produtos/formProduto/FormProduto";
import DeleteProduto from "./components/produtos/deleteProduto/DeleteProduto"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow"> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Cadastrar" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categorias" element={<ListarCategoria />} />
                <Route path="/cadastrarCategoria" element={<FormCategoria />} />
                <Route path="/atualizarCategoria/:id" element={<FormCategoria />} />
                <Route path="/deleteCategoria/:id" element={<DeleteCategoria />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/cadastrarProduto" element={<FormProduto />} />
                <Route path="/editarProduto/:id" element={<FormProduto />} />
                <Route path="/deleteProduto/:id" element={<DeleteProduto />} />

              </Routes>
            </main>
          </div>
          <Navbar />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
