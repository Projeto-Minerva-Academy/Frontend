<<<<<<< HEAD
import Home from "./pages/home/home"
import Sobre from "./pages/sobre/sobre"
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";
>>>>>>> 307166c8cec90c28f3b62aa45d003bce3fe20c64

function App() {

  return (
<<<<<<< HEAD
    // Código TSX => HTML + CSS
    <>

      <Home />
      <Sobre />
=======

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
>>>>>>> 307166c8cec90c28f3b62aa45d003bce3fe20c64
    </>
  );
}

export default App