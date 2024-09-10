import Navbar from "../../components/navbar/Navbar";
import CourseCard from "../../components/coursecard/CourseCard";


const Cursos = () => (
  <div>
    <Navbar />
    <div className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="mt-20 main__title--gradient text-4xl font-size-12 font-bold">Cursos</h1>
        <p className="mt-2 mb-20 text-base text-gray-700 md:text-lg">
          Confira nossos cursos disponíveis
        </p>
        <div className="lg:flex lg:-mx-2 mt-6 ">
          <div className=" w-80 mr-1.5 lg:px-2 lg:space-y-4 p-4 py-6 px-6 rounded-lg border bg-gray-50 md:p-8">
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



          <div className="items-center justify-beetween content-around grid grid-cols-3 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            
                <CourseCard
                  image="https://instagamio.com/assets/images/ludo_game/slider/slide4.png"
                  title="Desenvolvimento Web"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://th.bing.com/th/id/OIP.GqOns6glZwSzl7ur9N2crAHaHa?rs=1&pid=ImgDetMain"
                  title="Banco de Dados"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://www.yaslip.com.br/imagens-y/setor-agendamento.jpg"
                  title="Desenvolvimento Mobile"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://media.licdn.com/dms/image/D4D12AQETHKbOfzj0kg/article-cover_image-shrink_720_1280/0/1693062700751?e=2147483647&v=beta&t=FHMhfyEkVE8BrCFyDSmcxC11M8XZTy0N8na455NvJbw"
                  title="Gestão de Projetos"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://img.freepik.com/free-vector/soft-skills-concept-illustration_114360-25941.jpg"
                  title="Soft Skills"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://image.freepik.com/vetores-gratis/desenvolvimento-de-software-linguagem-de-programacao-codificacao_284092-33.jpg"
                  title="Programação Avançada"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://www.techspian.com/wp-content/uploads/2023/05/What-is-UIUX-Transformation-and-How-Does-it-Benefit-Businesses-04-scaled.jpg"
                  title="Design de UI e UX"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://th.bing.com/th/id/OIP.FQwVFY_Xb5CNCIxVPvxRwQHaEK?rs=1&pid=ImgDetMain"
                  title="Cibersegurança"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />

                <CourseCard
                  image="https://www.webdesigninglab.com/images/support/web-hosting.jpg"
                  title="Sistemas Operacionais"
                  description="Aprenda a criar aplicações web com as tecnologias mais modernas do mercado."
                />


          </div>
        </div>
      </div>
      </div>
  </div>
);

export default Cursos;
