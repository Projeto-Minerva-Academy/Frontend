import React from "react";
import Button from "../button/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
      <div className="absolute inset-0 -z-0 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5ae99a] to-[#681eca] opacity-30" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
      </div>

      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/fundooo.png')" }} />

      <div className="z-10 max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden px-6 pt-14 lg:px-8">
        <div className="flex flex-col items-center space-y-5 px-4 sm:max-w-g md:px-0 lg:max-w-md">
          <h2 className="text-4xl text-white font-extrabold md:text-5xl text-center">
            Na Minerva você dá o{" "}
            <span className="bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              start
            </span>{" "}
            que sua carreira precisa
          </h2>
          <p className="text-gray-300">
            Profissionais qualificados e certificados reconhecidos ao final de cada curso, por um valor que cabe no seu bolso!
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
  <Button 
    to="/projeto" 
    className="text-white bg-gray-600 hover:bg-gray-400 text-center text-sm" 
  >
    Conheça nosso projeto
  </Button>
  <Button
    to="/cadastrar"
    className="relative py-1 px-7 text-white border border-gray-600 bg-transparent rounded-full overflow-hidden group text-sm" 
  >
    <span className="absolute inset-0 bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    <span className="relative z-10">Garanta já seu acesso</span>
  </Button>
</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
