
function Projeto() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl mb-40 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2> */}
            <h1 className="mt-10 main__title--gradient text-5xl font-size-12 font-bold">Projeto Minerva</h1>
            <p className="mt-6 text-base text-gray-700 md:text-lg">
              O Projeto Minerva é uma iniciativa dedicada a proporcionar educação de qualidade para todos.
              Nosso objetivo é promover a inclusão e a equidade no aprendizado, oferecendo cursos e
              recursos que atendem a uma ampla gama de necessidades e interesses.
              Acreditamos que a educação é a chave para transformar vidas e, por isso,
              nos empenhamos em criar um ambiente acessível e enriquecedor para todos os nossos alunos.
              Junte-se a nós e descubra como podemos ajudá-lo a alcançar seus objetivos educacionais.
            </p>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4x2 sm:leading-none">
              Sobre a ODS nº 4: Educação de Qualidade</h2>
            <p className="text-base text-gray-700 md:text-lg">
              Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">

            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Meta 4.3
              </h6>
              <p className="text-sm text-gray-900">
                Até 2030, assegurar a igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, a preços acessíveis, incluindo universidade.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Meta 4.4
              </h6>
              <p className="text-sm text-gray-900">
                Até 2030, aumentar substancialmente o número de jovens e adultos que tenham habilidades relevantes, inclusive competências técnicas e profissionais, para emprego, trabalho decente e empreendedorismo.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="mt-20 md:rounded-tl-[108px] md:rounded-br-[108px]"
            src="https://www.epiloguesystems.com/wp-content/uploads/2022/10/shot-of-a-group-of-businesspeople-discussing-somet-2023-11-27-04-55-39-utc-1536x1041.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projeto