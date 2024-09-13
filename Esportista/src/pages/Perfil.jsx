import React from 'react';
import styles from "./Perfil.module.css";
import NavEsporte from '../components/layout/NavEsporte';

const Perfil = () => {
    const usuario = localStorage.getItem('usuario')

    return (
        <>
            <NavEsporte
                children={
                    <div className={styles.view}>
                        <div className={styles.container}>
                            <div className={styles.profile}>
                                <img src="" alt="" />
                                <div>
                                    <p>{usuario}</p>
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
                }
            />

        </>
    );
}

export default Perfil;
