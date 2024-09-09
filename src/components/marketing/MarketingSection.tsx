import React from 'react';
import { Camera, Book, Globe, User, Laptop } from "phosphor-react" // Exemplo de ícones da Phosphor Icons

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: <Camera size={40} color="#60A5FA" />,
    title: "Banco de Dados",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <Book size={40} color="#60A5FA" />,
    title: "Desenvolvimento Web",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <Globe size={40} color="#60A5FA" />,
    title: "Ciências da Computação",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <User size={40} color="#60A5FA" />,
    title: "Gestão de Projetos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <Laptop size={40} color="#60A5FA" />,
    title: "Programação Avançada",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <a
              key={index}
              className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-blue-400 hover:shadow-blue-400"
              href="#"
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
            href="#"
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
