import React from 'react';
import styles from "./BoxJogador.module.css";

const BoxJogador = ({ nome, jogadorImg, posicao, nacionalidade, nacionalidadeImg }) => {
    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <img src={jogadorImg} alt={nome} />
                <p>{nome}</p>
            <div className={styles.info}>
                <p>{posicao}</p>
                <div className={styles.row}>
                    <img src={nacionalidadeImg} alt={nacionalidade} />
                    <p>{nacionalidade}</p></div>
            </div>
            </div>

        </div>
    )
}

export default BoxJogador;