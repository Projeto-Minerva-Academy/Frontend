import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";
// import HeroSection from "./components/heroSection/HeroSection";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Cadastrar" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Navbar />
          {/* <Button children={undefined} /> */}
          {/* <Card title={""} description={""} imageSrc={""} /> */}
          {/* <HeroSection /> */}
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
