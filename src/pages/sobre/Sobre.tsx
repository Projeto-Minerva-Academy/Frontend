import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Sobre() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Quem faz</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Conheça nosso time de Desenvolvedores:
        </p>
      </div>

      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/D4D03AQHZrS9PQKKG2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723056213655?e=1730937600&v=beta&t=baqRVtWqVOWwJ3MXKeTWpEsHl0GnuU6q8n0VEbQwTuE"
              alt="Francielli Valério"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/franciellivalerio/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/franciellivalerio"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Francielli Valério</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedora Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedora Full Stack Jr | TypeScript | Nodejs | Nestjs |
              MySQL | React | HTML | CSS | Javascript | Bootstrap | Git e Github
              |
            </p>
          </div>
        </div>{" "}
        {/* div da divisão */}
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/D4D03AQEAmtlk1ih3pg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721075129089?e=1731542400&v=beta&t=XCnHRtN0Spy2N0n29hPAhOPX8qX4yOoaAM0TZ4w9nSE"
              alt="Gabriel Buchud"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/gabriel-buchud/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/Gabriel-Buchud"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Gabriel Buchud</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedor FullStack Jr | JavaScript | TypeScript | NodeJS |
              NestJS | SQL | REACT | Tailwind | CSS | Metodologias Ágeis
            </p>
          </div>
        </div>
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/C5603AQFLrUOf_XtPoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647292944283?e=1730937600&v=beta&t=XmqKFYAK0c-ltzUyXpBG_hgrsuyF3sOArPP4I8np2ik"
              alt="Júlia Lameiras"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/julialameiras/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/julialameiras"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Júlia Lameiras</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedora Full-Stack Jr. | JavaScript | TypeScript | Node.js
              | NestJS | SQL | Git
            </p>
          </div>
        </div>
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/D4E03AQGkBJ3f4yIhsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720054797832?e=1730937600&v=beta&t=itRTo5UWYBfcOBX9c7nBleyF5EURBu3Uk0_GQh-1sko"
              alt="Pedro Barboza"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/pedro-barboza-1958722b6/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/PedroBarboza28"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Pedro Oliveira</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedor Full Stack Jr | Scrum | HTML | CSS | TypeScript |
              React.js | MySQL | GIT | GitHub | Node.js | Nest.js | HTTP.
            </p>
          </div>
        </div>
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/D4D03AQF79lY12JjXWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718838789346?e=1730937600&v=beta&t=zn8AZuK35OFiePaQoD02DvmCBPqu3sAl9vRU9CE2T04"
              alt="Roger Cruz"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/roger-seixas/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/RogerVCruz"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Roger Seixas</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedor Backend Junior | Estagiário | Programador Back-end |
              NodeJs | Typescript | Javascript
            </p>
          </div>
        </div>
        <div>
          <div className="relative rounded-full w-40 h-40 md:h-30 sm:hover:-translate-y-1 hover:shadow-1xl">
            <img
              className="static rounded-full md:h-40"
              src="https://media.licdn.com/dms/image/v2/D4D03AQEGh6VFLPeK_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719088649276?e=1730937600&v=beta&t=yuKbj2KsZM36m_xp18KWZOBvSxNxVCq6A2GRiz2D5v8"
              alt="Yohana Faria"
            />
            <div className="absolute inset-0 flex flex-col rounded-full w-15 justify-center px-5 py-4 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
              {/* ícones da redes sociais */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/yohanafaria/"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <LinkedinLogo size={40} color="currentColor" />
                </a>
                <a
                  href="https://github.com/yohanafaria"
                  className="hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  <GithubLogo size={40} color="currentColor" />
                </a>
              </div>{" "}
              {/* div das logos */}
            </div>{" "}
            {/* div do efeito preto sobre a foto */}
          </div>{" "}
          {/* div da imagem */}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Yohana Faria</p>
            <p className="mb-4 text-xs text-gray-400">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Desenvolvedora FullStack Jr | JavaScript | TypeScript | NodeJS |
              NestJS | SQL | REACT | Tailwind | CSS | Metodologias Ágeis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
