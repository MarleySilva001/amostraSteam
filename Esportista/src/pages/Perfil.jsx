import React from 'react';
import styles from "./Perfil.module.css";
import NavEsporte from '../components/layout/NavEsporte';

const Perfil = () => {
    const usuario = localStorage.getItem('usuario')

    return (
        <>
            <NavEsporte
                children={
                    <div className={styles.imgfixo}>
                        <img src="/Perfil.png" alt="" />
                    </div>
                }
            />

        </>
    );
}

export default Perfil;
