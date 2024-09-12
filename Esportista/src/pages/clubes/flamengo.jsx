import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from '../../components/layout/NavBar';
import BoxJogador from "../../components/layout/jogador&clube/BoxJogador";
import styles from "./flamengo.module.css";
import NavEsporte from "../../components/layout/NavEsporte";

const Flamengo = () => {
    const [clubes, setClubes] = useState([]);
    const [jogadores, setJogadores] = useState([]);

    async function fetchClubes() {
        try {
            const response = await axios.get('../../../db.json');
            setClubes(response.data.clubes);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }
    useEffect(() => {
        fetchClubes();
    }, []);

    useEffect(() => {
        const clube = clubes.find(clube => clube.nome.toLowerCase() === 'flamengo');
        if (clube) {
            setJogadores(clube.jogadores);
            console.log('Jogadores do clube:', clube.jogadores);
        } else {
            console.log('Clube não encontrado');
        }
    }, [clubes]);

    return (
        <>
        <NavBar />
            <div className={styles.view}>
                <NavEsporte />
                <p>Flamengo</p>
                <h1>Elenco</h1>
                <ul className={styles.ul}>
                    {jogadores.map(jogador => (
                        <li key={jogador.id} className={styles.li}>
                            <BoxJogador
                                nome={jogador.nome}
                                jogadorImg={jogador.jogadorImg}
                                posicao={jogador.posicao}
                                nacionalidade={jogador.nacionalidade}
                                nacionalidadeImg={jogador.nacionalidadeImg}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Flamengo;
