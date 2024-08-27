function Sobre (){

    return (
    <section className="bg-blue py-20 px-4"> 
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Conheça o projeto</h1>
        <p className="text-lg text-black mb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque corporis officiis numquam, 
          nisi consectetur totam veritatis earum velit, sapiente laboriosam exercitationem aut, 
          ex accusamus repudiandae accusantium adipisci sequi explicabo! Eos.
        </p>
      </div>

      <div className="flex justify-center space-x-8">
        {/* Card 1 */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-8 w-64 hover:bg-opacity-75 transition">
          <h3 className="text-xl font-semibold text-black text-center mb-4">Conheça os desenvolvedores</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-8 w-64 hover:bg-opacity-75 transition">
          <h3 className="text-xl font-semibold text-black text-center mb-4">Contate-nos</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-8 w-64 hover:bg-opacity-75 transition">
          <h3 className="text-xl font-semibold text-ext-center mb-4">Dúvidas</h3>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
