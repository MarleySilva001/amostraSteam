import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/layout/NavBar';

const Esportes = () => {
  const [jogadores, setJogadores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../db.json');
        setJogadores(response.data.jogadores);
      } catch (error) {
        setErro('Erro ao buscar os dados');
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <NavBar />
      <div>
        <h1>Jogadores</h1>
        {carregando && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}
        <ul>
          {jogadores.map(jogador => (
            <li key={jogador.id}>
              <img src={jogador.fotoJ} alt={jogador.nome} width={100} />
              <h2>{jogador.nome}</h2>
              <p>Idade: {jogador.idade}</p>
              <p>Clube: {jogador.clube}</p>
              <p>Nacionalidade: {jogador.nacionalidade}</p>
              <p>Camisa: {jogador.camisa}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Esportes;