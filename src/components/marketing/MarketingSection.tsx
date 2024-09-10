import React from 'react';
import { Globe, Database, Code, Browsers, ChartLine, User} from "phosphor-react" // Exemplo de ícones da Phosphor Icons


type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: <Database size={32} color="#60A5FA" />,
    title: "Banco de Dados",
    description: "Aprenda a modelar, estruturar e gerenciar bancos de dados. Entenda conceitos de SQL, NoSQL e técnicas para otimizar o desempenho e segurança das suas informações.",
  },
  {
    icon: <Browsers size={32} color="#60A5FA" />,
    title: "Desenvolvimento Web",
    description: "Domine as tecnologias front-end e back-end. Crie sites e aplicações interativas usando HTML, CSS, JavaScript e frameworks modernos.",
  },
  {
    icon: <Globe size={40} color="#60A5FA" />,
    title: "Ciências da Computação",
    description: "Explore os fundamentos da computação. Aprenda algoritmos, estruturas de dados, programação e os princípios que movem a tecnologia moderna.",
  },
  {
    icon: <ChartLine size={32}color="#60A5FA" />,
    title: "Gestão de Projetos",
    description: "Desenvolva habilidades para planejar, executar e gerenciar projetos com eficiência. Aprenda metodologias ágeis e técnicas para liderar equipes e alcançar metas.",
  },
  {
    icon: <Code size={32}  color="#60A5FA" />,
    title: "Programação Avançada",
    description: "Aprofunde seus conhecimentos em programação. Explore conceitos avançados, padrões de projeto, otimização de código e algoritmos complexos.",
  },
  {
    icon: <User size={32}  color="#60A5FA" />,
    title: "Soft Skills",
    description: "Desenvolva competências essenciais para o mercado. Aprenda a comunicação eficaz, trabalho em equipe, resolução de conflitos e habilidades de liderança.",
  },
];

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Principais cursos
          </h2>

          <p className="mt-4 text-gray-600">
            Nosso site oferece cursos de diversas áreas da tecnologia, com certificação reconhecida ao final de cada curso.
          </p>
          <p className="mt-4 text-gray-600">
            Confira abaixo os principais cursos disponíveis.
            </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <a
              key={index}
              className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-blue-400 hover:shadow-blue-400"
            >
              <div className="flex justify-center items-center">
                {card.icon}
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-800">{card.title}</h2>

              <p className="mt-1 text-sm text-gray-600">
                {card.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/cursos"
            className="inline-block rounded-full bg-gradient-to-r from-blue-400 to-green-400 px-12 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
