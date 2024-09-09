import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex';
import Squad from './pages/Squad';
import Profile from './pages/Profile';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/pokedex" element={<Pokedex />} />  
        <Route path="/equipe" element={<Squad />} />  
        <Route path="/perfil" element={<Profile />} />  
      </Routes>
    </Router>
    </>
  )
}

export default App
