import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex';
import Profile from './pages/Profile';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} />  
        <Route path="/inicio" element={<Home />} />  
        <Route path="/pokedex" element={<Pokedex />} />  
        <Route path="/perfil" element={<Profile />} />  
      </Routes>
    </Router>
    </>
  )
}

export default App
