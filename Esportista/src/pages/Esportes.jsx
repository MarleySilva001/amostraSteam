import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/layout/NavBar';
import CardJogador from '../components/layout/CardJogador';
import styles from './Esportes.module.css'

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
        <ul className={styles.lista}>
          {jogadores.map(jogador => (
            <li key={jogador.id}>
              <CardJogador 
              nome={jogador.nome}
              jogadorImg={jogador.jogadorImg}
              idade={jogador.idade}
              nacionalidade={jogador.nacionalidade}
              nacionalidadeImg={jogador.nacionalidadeImg}
              clube={jogador.clube}
              clubeImg={jogador.clubeImg}
              camisa={jogador.camisa}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Esportes;