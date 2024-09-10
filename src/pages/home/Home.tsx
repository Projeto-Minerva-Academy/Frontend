import HeroSection from "../../components/heroSection/HeroSection";
import MarketingSection from "../../components/marketing/MarketingSection";
import Testimonials from "../../components/testimonials/Testimonials";
import StatisticsSection from "../../components/statisticssection/StatisticsSection";
import LogoSection from "../../components/logosection/LogoSection";

function Home() {
  return (
    <div className="flex justify-center mb-56 bg-white">
      <div className="container grid grid-cols text-gray-800">
        <HeroSection />

        <div className="flex flex-col items-center justify-center gap-6 py-10 mt-20 mb-40 text-center">
          <h1 className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent text-4xl font-bold">
            Na Minerva, você dá o primeiro passo em direção a uma jornada de
            aprendizado transformadora!
          </h1>
          <p className="text-xl text-gray-600">
            Acreditamos que a educação é a chave para abrir portas e criar
            oportunidades, proporcionando a cada indivíduo as ferramentas
            necessárias para alcançar seu potencial máximo.
          </p>

          <div className="flex justify-center mt-10 gap-6">
            {["Programação Avançada", "Desenvolvimento Web", "Banco de Dados", "Gestão de Projetos", "Soft Skills"].map((item, index) => (
              <div key={index} className="px-6 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full transition-colors">
                {item}
              </div>
            ))}
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
        </div>
      </div>
    </div>
  );
}

export default Home;
