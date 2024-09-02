const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 rounded-2xl shadow-md mx-auto max-w-screen-2xl ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between text-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h2 className="text-xl font-bold mb-4">Sobre Nós</h2>
              <div className="tracking-wide">
                <p>Somos uma plataforma de cursos online na área de tecnologia
                 com diversos cursos.</p>
                 <p>
                  Te preparamos do zero ao avançado para você se tornar um profissional completo.
                </p>
              </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
            <ul>
              <li><a href="#home" className="hover:underline">Início</a></li>
              <li><a href="#services" className="hover:underline">Serviços</a></li>
              <li><a href="#contact" className="hover:underline">Conheça mais</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (11) 98765-4321</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-400 pt-4">
          <p className="text-center text-sm text-gray-600">&copy; 2024 Minerva Academy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
