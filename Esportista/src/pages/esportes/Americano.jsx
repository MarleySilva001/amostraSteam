import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/layout/NavBar';
import styles from './Futebol.module.css'
import NavEsporte from '../../components/layout/NavEsporte';
import CardClube from '../../components/layout/jogador&clube/CardClube';

const Americano = () => {
  const [times, setTimes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json');
        setTimes(response.data.futebolAmericano);
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
      <NavEsporte 
      children={<div className={styles.view}>
        <h1></h1>
        {carregando && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}
        <ul className={styles.lista}>
          {times.map(time => (
            <li key={time.id}>
              <CardClube
              nome={time.time}
              clubeImg={time.img}
              estadio={time.conferencia}
              loc={time.localizacao}
              item1='conferência:'
              item2='localização:'
              />
            </li>
          ))}
        </ul>
      </div>}
      />
      
    </>
  );
};

export default Americano;