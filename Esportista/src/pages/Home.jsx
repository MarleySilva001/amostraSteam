import React from 'react';
import NavBar from '../components/layout/NavBar';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className={styles.view}>
                <div className={styles.main}>

                </div>
                <div className={styles.aside}>

                </div>
            </div>
        </>
    );
}

export default Home;
