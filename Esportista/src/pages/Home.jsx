import React from 'react';
import styles from "./Home.module.css";
import NavEsporte from '../components/layout/NavEsporte';

const Home = () => {
    return (
        <>
            <NavEsporte
                children={
                    <div className={styles.view}>
                        <div className={styles.main}>

                        </div>
                        <div className={styles.aside}>

                        </div>
                    </div>
                }
            />
        </>
    );
}

export default Home;
