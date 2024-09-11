import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import AuthButtonAbove from "../buttons/authButtons/AuthButtonAbove";
import AuthButtonBelow from "../buttons/authButtons/AuthButtonBelow";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  const isHomePage = location.pathname === "/";
  const isAdmin = usuario.usuario === "adm@minerva.com.br"; 

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || !isHomePage ? "bg-gray-700 text-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-24 py-2 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 flex items-center"
        >
          <img src="/logob.png" alt="Logo" className="h-10" />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav
          className={`md:flex items-center md:space-x-6 absolute md:static top-0 left-200 ml-52 w-full md:w-auto transition-transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center">
            <li><Link to="/cursos" className="text-white hover:main__title--gradient text-1xl">Cursos</Link></li>
            <li><Link to="/Projeto" className="text-white hover:main__title--gradient text-1xl">A Minerva</Link></li>
            <li><Link to="/Sobre" className="text-white hover:main__title--gradient text-1xl">Quem Faz</Link></li>
            <li><Link to="/Contato" className="text-white hover:main__title--gradient text-1xl">Contato</Link></li>
            {usuario.token !== "" && (
              <>
                {isAdmin && ( 
                  <>
                <li>
                  <Link to="/Categorias" className="text-blue-500 hover:main__title--gradient text-1xl">Categorias</Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-blue-500 hover:main__title--gradient text-1xl">Produtos</Link>
                </li>
                  </>
                )}
                <li>
                  <button
                    onClick={logout}
                    className="text-blue-500 hover:main__title--gradient text-1xl"
                  >
                    Sair
                  </button>
                </li>
              </>
            )}

          </ul>
        </nav>

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
      </div>
    </header>
  );
};

export default Navbar;
