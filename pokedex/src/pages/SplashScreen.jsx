import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {

    let Navigate = useNavigate()
    const [Carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false)
        }, 2200)
        return () => {
            clearTimeout(timer)
        };
    }, []);

    return (
        <>
        <div className={styles.tudo}>
                {Carregando ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: [0.4, 0.8, 1], scale: [0.1, 1.2, 1] }}
                        transition={{ duration: 2 }}
                    >
                        <img src="pokemonLogo.png" alt="" className={styles} />
                    </motion.div>
                ) : (
                    Navigate('/login')
                )}
</div>
        </>
    );
}

export default SplashScreen;
