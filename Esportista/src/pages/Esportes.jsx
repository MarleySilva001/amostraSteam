import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/layout/NavBar';
import styles from './Esportes.module.css'
import CardClube from '../components/layout/CardClube';
import NavEsporte from '../components/layout/NavEsporte';

const Esportes = () => {
  const [clubes, setclubes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../db.json');
        setclubes(response.data.clubes);
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
        <NavEsporte />
        <h1>clubes</h1>
        {carregando && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}
        <ul className={styles.lista}>
          {clubes.map(clube => (
            <li key={clube.id}>
              <CardClube
              nome={clube.nome}
              clubeImg={clube.clubeImg}
              estadio={clube.estadio}
              loc={clube.loc}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Esportes;