import React from 'react';
import styles from "./BoxJogador.module.css";

const BoxJogador = ({ nome, jogadorImg, posicao, nacionalidade, nacionalidadeImg }) => {
    return (
        <div className={styles.border}>
            <div className={styles.box}>
                <img src={jogadorImg} alt={nome} />
                <p>{nome}</p>
                <div className={styles.bottomBox}>
                    <p>{posicao}</p>
                    <div>
                        <img src={nacionalidadeImg} alt={nacionalidade} />
                        <p>{nacionalidade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxJogador;