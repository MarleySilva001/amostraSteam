import { Link, useLocation } from "react-router-dom";
import logo from '/logo.png'
import { PiBasketballFill, PiFootballFill, PiSoccerBallFill, PiVolleyballFill } from "react-icons/pi";
import styles from "./styles/NavEsporte.module.css"
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const NavEsporte = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <div className={styles.cimentoEsp}></div>
            <nav className={styles.navEsporte}>
                <div className={styles.logo}>
                    <Link to={'/home'}><img src={logo} alt="Logo" /> Esportista</Link>
                </div>
                <SearchBar />
                <ul className={styles.sportUl}>
                    <li className={`${styles.sportLi} ${location.pathname === '/esportes' || location.pathname === '/esportes/futebol/clube/Flamengo' || location.pathname === '/esportes/futebol/clube/Botafogo' || location.pathname === '/esportes/futebol/clube/Palmeiras' ? styles.active : ''}`}>
                        <Link to={'/esportes'}>
                            <PiSoccerBallFill />
                            <p>Futebol</p>
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
                    <li className={`${styles.sportLi} ${location.pathname === '/esportes/volei' ? styles.active : ''}`}>
                        <Link to={'/esportes/volei'}>
                            <PiVolleyballFill />
                            <p>Volei</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.view}>
                <NavBar />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default NavEsporte;