import { Envelope, GithubLogo, MapPin } from "@phosphor-icons/react";


function Contato() {

  return (
<section className="bg-white">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-white">----</p>
            <div className="sm:w-20 sm:max-w-sm">
            <img
            alt="Your Company"
            src="./public/logo.png"
            className="mx-auto h-2/6 w-auto"
          />
          </div>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Entre em contato!</h1>

            <p className="mt-3 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">

        <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600">Nome</label>
                            <input type="text" placeholder="João " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600">Sobrenome</label>
                            <input type="text" placeholder="Silva" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Assunto</label>
                            <input type="text" placeholder="Assunto " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="joaosilva@exemplo.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600">Messagem</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="relative py-2 px-8 mt-4 text-white text-base nded-full overflow-hidden bg-blue-400 rounded-full hover:text-white hover:bg-blue-500">
        Enviar
      </button>
            </form>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                <Envelope size={30} color="grey" />
                    <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Se preferir, envie um email para:</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">projetominerva01@gmail.com</p>
                </div>

                <div>
                    <GithubLogo size={30} color="grey" />
                    <h2 className="mt-4 text-base font-medium text-gray-800">Github</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Siga nosso projeto no Github!</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">https://github.com/Projeto-Minerva-Academy/</p>
                </div>

                <div>
                <MapPin size={30} color="grey" />                    
                    <h2 className="mt-4 text-base font-medium text-gray-800">Localização</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Venha tomar um café conosco!</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="100%" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            </div>
        </div>
    </div>
</section>
  );
};
export default Contato