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
        }, 6000)
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
                        transition={{ duration: 3 }}
                    >
                        SplashScreen
                    </motion.div>
                ) : (
                    Navigate('/home')
                )}

            </Container>
        </>
    );
}

export default SplashScreen;
