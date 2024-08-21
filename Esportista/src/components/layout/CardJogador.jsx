import styles from "./CardJogador.module.css";

const CardJogador = ({nome, jogadorImg, idade, nacionalidade, nacionalidadeImg, clube, clubeImg, camisa}) => {
    return(
        <div className={styles.card}>
            <div className={styles.row}>
                <img src={jogadorImg} alt={nome} />
                <p>{nome}</p>
            </div>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        Idade:{idade}anos
                    </li>
                    <li>
                        Nacionalidade:
                        <img src={nacionalidadeImg} alt={nacionalidade} />
                        {nacionalidade}
                    </li>
                    <li>
                        Clube:
                        <img src={clubeImg} alt={clube} />
                        {clube}
                    </li>
                    <li>
                        camisa:{camisa}
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default CardJogador;