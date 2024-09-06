import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import AuthButtonAbove from "../buttons/authButtons/AuthButtonAbove";
import AuthButtonBelow from "../buttons/authButtons/AuthButtonBelow";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  return (
    <header className="bg-transparent shadow-none fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-grow">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 flex items-center"
          >
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
          <div className="relative flex-grow max-w-xs">
            <input
              type="search"
              name="search"
              placeholder="O que você quer aprender?"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <nav
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-0 left-0 w-full md:w-auto bg-transparent transition-transform ${isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"} md:translate-y-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <Link to="/cursos" className="text-gray-800 hover:text-gray-600">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/Sobre" className="text-gray-800 hover:text-gray-600">
                O Projeto
              </Link>
            </li>
            <li>
              <Link to="/Contato" className="text-gray-800 hover:text-gray-600">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/Produtos" className="text-gray-800 hover:text-gray-600">
                Produtos
              </Link>
            </li>
            {(<li>
              <Link
                to="/Categorias"
                className="text-gray-800 hover:text-gray-600"
              >
                Categoria
              </Link>
            </li>)}
            {usuario.token !== "" && (
              <li>
                <Link
                  to=""
                  onClick={logout}
                  className="text-gray-800 hover:text-gray-600"
                >
                  Sair
                </Link>
              </li>
            )}
          </ul>
          {usuario.token === "" && (
            <div className="relative flex items-center -space-x-10 mt-4 md:mt-0">
              <div className="relative z-20">
                <Link to="/login">
                  <AuthButtonAbove />
                </Link>
              </div>
              <div className="relative -ml-44 z-0">
                <Link to="/Cadastrar">
                  <AuthButtonBelow />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
