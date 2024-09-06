import React from 'react';

const StatisticsSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
          Confira o que temos a oferecer!
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
            Cursos a partir:
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">R$2.0M</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
            Plataforma ativa:
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">24hr</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
            Cursos disponíveis:
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">15</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 transition-transform transform hover:scale-105 hover:border-blue-400 hover:shadow-xl">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
            Total de alunos:
          </dt>
          <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">27.356</dd>
        </div>
      </dl>
    </div>
  );
};

export default StatisticsSection;
