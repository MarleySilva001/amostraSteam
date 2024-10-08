import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Container from '../components/layout/Container';

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
            <Container>
                {Carregando ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1  }}
                        transition={{ duration: 1.5 }}
                    >
                        <img src="logo.png" alt="" />
                    </motion.div>
                ) : (
                    Navigate('/login')
                )}

            </Container>
        </>
    );
}

export default SplashScreen;
