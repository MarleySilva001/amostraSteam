import React from 'react'
import { Link } from "react-router-dom";
import { TbUserFilled, TbPokeball } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <img src="/pokemonLogo.png" alt="" />
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to={'/inicio'}>
                        <IoMdHome />
                        <p>inicio</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/pokedex'}>
                        <TbPokeball />
                        <p>pokedex </p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/perfil'}>
                        <TbUserFilled />
                        <p>perfil</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;