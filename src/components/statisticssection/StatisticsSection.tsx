import React from 'react';

const StatisticsSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          Confira o que temos a oferecer!
        </h2>

        <p className="mt-4 text-gray-600 sm:text-xl dark:text-gray-600">
        Desde habilidades técnicas até desenvolvimento pessoal, 
        oferecemos conteúdos atualizados e relevantes para impulsionar sua carreira e crescimento.</p>
        <p className="mt-4 text-gray-600 sm:text-xl dark:text-gray-600"> 
        Confira nossos cursos e encontre o ideal para você!
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          
          <dt className=" text-lg font-medium text-gray-500 dark:text-gray-400">
            Cursos por apenas
          </dt>
          
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">R$2,00</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className=" text-lg font-medium text-gray-500 dark:text-gray-400">
            Plataforma ativa
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">24h</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className="text-lg font-medium text-gray-500 dark:text-gray-400">
            Cursos disponíveis
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">+15</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className=" text-lg font-medium text-gray-500 dark:text-gray-400">
            Total de alunos
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">27.356</dd>
        </div>
      </dl>
    </div>
  );
};

export default StatisticsSection;
