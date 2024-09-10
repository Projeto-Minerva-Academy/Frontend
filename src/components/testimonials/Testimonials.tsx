import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          Veja a avaliação de nossos alunos.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
          {[1].map((_, index) => (
            <blockquote key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-400 border border-transparent">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  src="https://th.bing.com/th/id/OIP.9b1O-rG08c0sMs4NlAJq_wHaHa?rs=1&pid=ImgDetMain"
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-400"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-800">João Silva</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
              Acabei de concluir o curso de Banco de Dados e estou extremamente satisfeito com o 
              que aprendi. O conteúdo foi bem estruturado e abrangeu desde os conceitos básicos 
              até as técnicas avançadas de SQL e NoSQL. As aulas práticas foram fundamentais para
              consolidar meu aprendizado e a equipe de suporte foi muito atenciosa. 
              Agora me sinto muito mais confiante para trabalhar com bancos de dados 
              no meu dia a dia profissional.
              Recomendo para quem busca uma formação completa e atualizada!
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
          {[1].map((_, index) => (
            <blockquote key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-400 border border-transparent">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1-600x400.jpg"
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-400"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-800">Marina Oliveira</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
              O curso de Programação Avançada foi uma experiência transformadora para mim. 
              A profundidade dos tópicos abordados, como padrões de projeto e otimização de código,
              realmente me desafiou e me ajudou a elevar minhas habilidades a um novo nível.
              A metodologia de ensino é excelente, com uma combinação perfeita de teoria e prática.
              A abordagem dos instrutores e o suporte durante o curso foram excepcionais.
              Agora me sinto preparado para enfrentar desafios mais complexos no desenvolvimento de software.
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
          {[1].map((_, index) => (
            <blockquote key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-400 border border-transparent">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  src="https://th.bing.com/th/id/OIP.HzPoc8cf05kBYhyuk-MGfwHaHa?rs=1&pid=ImgDetMain"
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-400"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-800">Kelly Dantas</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
              Participar do curso de Soft Skills foi uma decisão acertada para meu desenvolvimento pessoal 
              e profissional. Aprendi técnicas valiosas de comunicação, gestão de conflitos e liderança, 
              que têm feito uma diferença significativa no meu trabalho em equipe e nas minhas interações 
              diárias. As atividades práticas e os workshops foram extremamente úteis e proporcionaram um 
              ambiente de aprendizado envolvente e interativo. 
              Agradeço muito pelo impacto positivo que este curso teve na minha carreira!
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
          {[1].map((_, index) => (
            <blockquote key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-400 border border-transparent">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  src="https://i.pinimg.com/736x/61/41/80/6141809c767688d3d24adaecaba20782.jpg"
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-400"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-800">Fabrício Montes</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
              Finalizei o curso de Gestão de Projetos e posso dizer que superou minhas expectativas. 
              O curso ofereceu uma visão clara e prática das metodologias ágeis e técnicas de planejamento 
              e execução de projetos. Os estudos de caso foram extremamente úteis para entender como aplicar 
              os conceitos na prática. 
              Além disso, os instrutores tinham uma vasta experiência e ofereceram insights valiosos. 
              Sinto que agora tenho as ferramentas e o conhecimento necessários para gerenciar projetos 
              com sucesso
              </p>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
