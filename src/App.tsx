import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

function App() {

  return (


    <>

    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/contato" element={<Contato />} />
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;