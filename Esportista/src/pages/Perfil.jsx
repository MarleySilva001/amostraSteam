import React from 'react';
import NavBar from '../components/layout/NavBar';
import styles from "./Perfil.module.css";

const Perfil = () => {
    return (
        <>
            <NavBar />
            <div className={styles.view}>
                <div className={styles.container}>
                    <div className={styles.profile}>
                        <img src="" alt="" />
                        <div>
                            <p>nomeusuario</p>
                        </div>
                    </div>
                    <div className={styles.favoritos}>
                        <ul className={styles.lista}>
                            <li>
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;
