import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import RedeSocial from "./pages/Redesocial";
import Perfil from "./pages/Perfil";
import Configuracoes from "./pages/Configuracoes";
import Futebol from "./pages/esportes/Futebol";
import Volei from "./pages/esportes/Volei";
import Basquete from "./pages/esportes/Basquete";
import Americano from "./pages/esportes/Americano";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/esportes" element={<Futebol />} />
        <Route path="/esportes/volei" element={<Volei />} />
        <Route path="/esportes/basquete" element={<Basquete />} />
        <Route path="/esportes/americano" element={<Americano />} />
        <Route path="/redesocial" element={<RedeSocial />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  )
}

export default App
