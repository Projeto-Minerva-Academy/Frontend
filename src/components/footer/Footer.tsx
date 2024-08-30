const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 rounded-lg shadow-md mx-auto max-w-screen-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Sobre Nós</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
            <ul>
              <li><a href="#home" className="hover:underline">Início</a></li>
              <li><a href="#services" className="hover:underline">Serviços</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (11) 98765-4321</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-400 pt-4">
          <p className="text-center text-sm text-gray-600">&copy; 2024 Empresa Exemplo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
