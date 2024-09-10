import Navbar from "../../components/navbar/Navbar";
import CourseCard from "../../components/coursecard/CourseCard";
import Footer from "../../components/footer/Footer";

const courses = [
  {
    title: "Curso de React",
    description: "Aprenda os fundamentos do React e crie aplicações incríveis.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Curso de Tailwind CSS",
    description:
      "Descubra como criar designs bonitos e responsivos com Tailwind CSS.",
    image: "https://via.placeholder.com/400x300",
  },
  // Adicione mais cursos aqui
];

const Cursos = () => (
  <div>
    <Navbar />
    <div className="bg-white">
      <div className="container px-6 py-8 mx-auto">
      <h1 className="mt-10 main__title--gradient text-4xl font-size-12 font-bold">Cursos</h1>
            <p className="mt-2 text-base text-gray-700 md:text-lg">
Confira nossos cursos disponíveis
            </p>
        <div className="lg:flex lg:-mx-2 mt-6 ">
          <div className="space-y-3 lg:w-2/5 lg:px-2 lg:space-y-4 p-4 py-6 rounded-lg bg-gray-50 md:p-8">
            <a
              href="#"
              className="block font-medium text-gray-600 hover:text-blue-400"
            >
              Desenvolvimento Web
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Banco de Dados
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Desenvolvimento de Jogos
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600 h hover:text-blue-400"
            >
              Gestão de Projetos
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Soft Skills
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Programação Avançada
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Design de UI e UX
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Cibersegurança
            </a>
            <a
              href="#"
              className="block font-medium text-gray-600  hover:text-blue-400"
            >
              Sistemas Operacionais
            </a>
          </div>

          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
              <p className="text-gray-500 dark:text-gray-300">5 Items</p>
              <div className="flex items-center">
                <p className="text-gray-500 dark:text-gray-300">
                  Classificar por:
                </p>
                <select className="font-medium text-gray-700 bg-transparent rounded-full dark:text-gray-500  focus:border-blue-400 focus:ring-blue-400 focus:outline-none">
                  <option value="#">Menor duração</option>
                  <option value="#">Maior duração</option>
                  <option value="#">Menor preço</option>
                  <option value="#">Maior preço</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
              <section
                id="courses"
                className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6"
              >
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                  />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Cursos;
