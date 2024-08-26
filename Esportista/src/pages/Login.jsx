import React from 'react';
import Button from '../components/layout/Button';
import Input from '../components/layout/Input';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import styles from './Login.module.css'
import LoginForm from '../components/layout/LoginForm';

const Login = () => {
    return (
        <div className={styles.row}>
            <div className={styles.box}>
                <div className={styles.formColor}><img src="logo.png" alt="" />
                </div>
                <div className={styles.form}>

                    <p className={styles.titulo}>Esportista</p>
                        <LoginForm />
                    <div className={styles.center}>
                        <p>Logar Com</p>
                    <div className={styles.miniRow}>
                        <button className={styles.google}><FcGoogle /></button>
                        <button className={styles.google}><FaFacebook /></button>
                    </div>
                    </div>
                    <p className={styles.cadastro}>Sem uma conta?<Link to='/cadastro' >cadastrar</Link></p>
                </div>

            </div>
        </div>
    );
}

export default Login;
