import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Team", path: "javascript:void(0)" },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex px-4">
        <div className="flex-none space-y-5 sm:max-w-lg lg:max-w-xl">
          <h1 className="text-sm text-blue-400 font-medium">
            Venha já para a Minerva!
          </h1>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent md:text-5xl">
            Garanta seu futuro com cursos que cabem no seu bolso.
          </h2>
          <p className="text-gray-600">
            Profissionais qualificados e certificados reconhecidos ao final de cada curso.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-center text-white font-medium bg-blue-400 duration-150 hover:bg-blue-500 active:bg-blue-600 rounded-full shadow-lg hover:shadow-none"
            >
              Vamos começar!
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border border-blue-400 rounded-full md:inline-flex"
            >
              Garanta já o seu acesso!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src="https://wordpress-cms-ead-prod-assets.quero.space/uploads/2023/10/1.jpg"
            className="md:rounded-tl-[108px] w-full"
            alt="Startup"
          />
        </div>
      </div>
      <div className="mt-14 px-4">
        <p className="text-center text-sm text-gray-700 font-semibold">
          Venha já para a melhor plataforma de ensino a distância.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6"></div>
      </div>
    </section>
  );
};

export default HeroSection;
