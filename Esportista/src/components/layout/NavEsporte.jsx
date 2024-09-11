import { Link, useLocation } from "react-router-dom";
import { PiBasketballFill, PiFootballFill, PiSoccerBallFill, PiVolleyballFill } from "react-icons/pi";
import styles from "./styles/NavEsporte.module.css"

const NavEsporte = () => {
    const location = useLocation();

    return (
        <nav className={styles.navEsporte}>
        <ul className={styles.sportUl}>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes' ? styles.active : ''}`}>
                <Link to={'/esportes'}>
                    <PiSoccerBallFill />
                    <p>Futebol</p>
                </Link>
            </li>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes/volei' ? styles.active : ''}`}>
                <Link to={'/esportes/volei'}>
                    <PiVolleyballFill />
                    <p>Volei</p>
                </Link>
            </li>

            <li className={`${styles.sportLi} ${location.pathname === '/esportes/basquete' ? styles.active : ''}`}>
                <Link to={'/esportes/basquete'}>
                    <PiBasketballFill />
                    <p>Basquete</p>
                </Link>
            </li>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes/americano' ? styles.active : ''}`}>
                <Link to={'/esportes/americano'}>
                    <PiFootballFill />
                    <p>Americano</p>
                </Link>
            </li>
        </ul>
        <input type="text" />
        </nav>
    );
}

export default NavEsporte;