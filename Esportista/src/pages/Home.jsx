import React from 'react';
import styles from "./Home.module.css";
import NavEsporte from '../components/layout/NavEsporte';

const Home = () => {
    return (
        <>
            <NavEsporte
                children={
                    <div className={styles.imgfixo}>
                    <img src="/home.png" alt="" />
                </div>
                }
            />
        </>
    );
}

export default Home;
