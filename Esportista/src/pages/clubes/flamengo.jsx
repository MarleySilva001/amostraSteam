import axios from "axios";
import { useState, useEffect } from "react";

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
        <div>
            <p>Flamengo</p>
            <h1>Elenco</h1>
            <ul>
                {jogadores.map(jogador => (
                    <li key={jogador.id}>
                        {jogador.nome}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Flamengo;
