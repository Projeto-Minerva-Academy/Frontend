import HeroSection from "../../components/heroSection/HeroSection";
import MarketingSection from "../../components/marketing/MarketingSection";
import Testimonials from "../../components/testimonials/Testimonials";
import StatisticsSection from "../../components/statisticssection/StatisticsSection";
import LogoSection from "../../components/logosection/LogoSection";

function Home() {
  return (
    <div className="flex justify-center mb-56">
      <div className="container grid grid-cols text-gray-800 ">
        <HeroSection></HeroSection>

        <div className="flex flex-col items-center justify-center gap-4 py-20 ">
          <h1 className="main__title--gradient text-4xl font-bold">
            Na Minerva, você dá o primeiro passo em direção a uma jornada de
            aprendizado transformadora!
          </h1>
          <p className="text-xl">
            Acreditamos que a educação é a chave para abrir portas e criar
            oportunidades, proporcionando a cada indivíduo as ferramentas
            necessárias para alcançar seu potencial máximo
          </p>

          <div className="flex justfy-center mt-10 gap-3">
            <div className="flex justify-around gap-4 ">
              <div className="px-4 py-2 border-2 border-white border-solid rounded-md ">
                Programação
              </div>
            </div>

            <div className="flex justify-around gap-4 ">
              <div className="px-4 py-2 border-2 border-white border-solid-md ">
                Designer
              </div>
            </div>

            <div className="flex justify-around gap-4 ">
              <div className="px-4 py-2 border-2 border-white border-solid rounded-md ">
                Banco de Dados
              </div>
            </div>

            <div className="flex justify-around gap-4 ">
              <div className="px-4 py-2 border-2 border-white border-solid rounded-md ">
                Gestão de Projetos
              </div>
            </div>
          </div>

          <div className="flex justify-around gap-4 ">
            <div className="px-4 py-2 border-2 border-white border-solid rounded-md ">
              Conteúdos Educacionais
            </div>
          </div>
        </div>

        <div className="App">
          <MarketingSection />

          <div>
            <LogoSection />
          </div>

          <div className="App">
            <StatisticsSection />
          </div>

          <div className="App">
            <Testimonials />
          </div>

          <div className="flex justify-center "></div>
        </div>
      </div>
    </div>
  );
  return <div>Home</div>;
}

export default Home;
