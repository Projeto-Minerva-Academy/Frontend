const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
        <div className="p-6">
          <h1 className="text-5xl font-bold mb-4">Transforme sua Carreira com os Melhores Cursos</h1>
          <p className="text-lg mb-8">Aprenda com especialistas e alcance seus objetivos profissionais.</p>
          <a href="#" className="bg-secondary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary transition duration-300 ease-in-out">Comece Agora</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
