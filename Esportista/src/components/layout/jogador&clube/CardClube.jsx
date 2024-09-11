import { Link } from "react-router-dom";
import styles from "./CardClube.module.css";

const CardClube = ({nome, clubeImg, estadio, loc, clube}) => {
    return(
        <Link to={`/esportes/futebol/clube/${nome}`}>
        <div className={styles.card}>
            <div className={styles.row}>
                <div className={styles.backgroundImg}><img src={clubeImg} alt={nome} /></div>
                <p>{nome}</p>
            </div>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        Estadio: {estadio}
                    </li>
                    <li>
                        Localização: {loc}
                    </li>
                </ul>
            
            </nav>
        </div>
        </Link>
        
    )
};

export default CardClube;