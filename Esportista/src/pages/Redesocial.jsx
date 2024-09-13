import React from 'react';
import NavEsporte from '../components/layout/NavEsporte';
import styles from "./RedeSocial.module.css";

const RedeSocial = () => {
    return (
        <>
            <NavEsporte
                children={
                    <div className={styles.imgfixo}>
                        <img src="/Stories.png" alt="" />
                    </div>
                }
            />

        </>
    );
}

export default RedeSocial;
