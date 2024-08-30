import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Ícones para menu e fechar

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          <img src="/logo.png" alt="Logo" className="h-8"/>
        </Link>

        {/* Menu de Hambúrguer para Dispositivos Móveis */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navegação Principal */}
        <nav className={`md:flex md:items-center md:space-x-6 absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/sobre" className="text-gray-800 hover:text-gray-600">O Projeto</Link>
            <Link to="/cursos" className="text-gray-800 hover:text-gray-600">Cursos</Link>
            <Link to="/contato" className="text-gray-800 hover:text-gray-600">Contato</Link>
          </div>
          <div className="md:flex md:items-center mt-4 md:mt-0">
            <a href="/cadastrar" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
              Registrar-se
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
