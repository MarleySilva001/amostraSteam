import { Link, useLocation } from "react-router-dom";
import { PiBasketballFill, PiFootballFill, PiSoccerBallFill, PiVolleyballFill } from "react-icons/pi";
import styles from "./NavEsporte.module.css"

const NavEsporte = () => {
    const location = useLocation();

    return (
        <ul className={styles.sportUl}>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes' ? styles.active : ''}`}>
                <Link to={'/esportes'}>
                    <PiSoccerBallFill />
                    <p>futebol</p>
                </Link>
            </li>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes/volei' ? styles.active : ''}`}>
                <Link to={'/esportes/volei'}>
                    <PiVolleyballFill />
                    <p>volei</p>
                </Link>
            </li>

            <li className={`${styles.sportLi} ${location.pathname === '/esportes/basquete' ? styles.active : ''}`}>
                <Link to={'/esportes/basquete'}>
                    <PiBasketballFill />
                    <p>basquete</p>
                </Link>
            </li>
            <li className={`${styles.sportLi} ${location.pathname === '/esportes/americano' ? styles.active : ''}`}>
                <Link to={'/esportes/americano'}>
                    <PiFootballFill />
                    <p>americano</p>
                </Link>
            </li>
        </ul>
    );
}

export default NavEsporte;