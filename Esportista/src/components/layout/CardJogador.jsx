import styles from "./CardClube.module.css";

const CardClube = ({nome, clubeImg, estadio, loc, clube}) => {
    return(
        <div className={styles.card}>
            <div className={styles.row}>
                <img src={clubeImg} alt={nome} />
                <p>{nome}</p>
            </div>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        estadio: {estadio}
                    </li>
                    <li>
                        loc: {loc}
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default CardClube;