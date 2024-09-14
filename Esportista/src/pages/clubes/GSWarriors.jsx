import axios from "axios";
import { useState, useEffect } from "react";
import BoxJogador from "../../components/layout/jogador&clube/BoxJogador";
import styles from "./flamengo.module.css";
import NavEsporte from "../../components/layout/NavEsporte";

const Warriors = () => {
    const [clubes, setClubes] = useState([]);
    const [jogadores, setJogadores] = useState([]);

    async function fetchClubes() {
        try {
            const response = await axios.get('/db.json');
            setClubes(response.data.basquete);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }
    useEffect(() => {
        fetchClubes();
    }, []);

    useEffect(() => {
        const clube = clubes.find(clube => clube.time.toLowerCase() === 'warriors');
        if (clube) {
            setJogadores(clube.jogadores);
            console.log('Jogadores do clube:', clube.jogadores);
        } else {
            console.log('Clube não encontrado');
        }
    }, [clubes]);

    return (
        <>
        <NavEsporte />
            <div className={styles.view}>
                
                <h1>Warriors</h1>
                <ul className={styles.ul}>
                    {jogadores.map(jogador => (
                        <li key={jogador.id} className={styles.li}>
                            <BoxJogador
                                nome={jogador.nome}
                                jogadorImg={jogador.img}
                                posicao={jogador.posicao}
                                nacionalidade={jogador.altura}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Warriors;