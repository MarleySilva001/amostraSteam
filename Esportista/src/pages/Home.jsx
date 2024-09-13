import React from 'react';
import styles from "./Home.module.css";
import NavEsporte from '../components/layout/NavEsporte';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <>
        <div className={styles.home}>
            <NavEsporte
                children={
                    <div className={styles.imgfixo}>
                    <img src="/home.png" alt="" />
                </div>
                }
            /> 
            </div>
          
        </>
    );
}

export default Home;
