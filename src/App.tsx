import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";
import HeroSection from "./components/heroSection/HeroSection";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>

        <Navbar />
        <Button children={undefined} />
        <Card title={""} description={""} imageSrc={""} />
        {/* <HeroSection /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
