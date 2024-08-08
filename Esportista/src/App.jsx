import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Esportes from "./pages/Esportes";
import RedeSocial from "./pages/Redesocial";
import Perfil from "./pages/Perfil";
import Configuracoes from "./pages/Configuracoes";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/esportes" element={<Esportes />} />
        <Route path="/redesocial" element={<RedeSocial />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  )
}

export default App
