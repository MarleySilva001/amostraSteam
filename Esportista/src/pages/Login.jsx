import React from 'react';
import Button from '../components/layout/Button';
import Input from '../components/layout/Input';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.row}>
            <div className={styles.box}>
            <div className={styles.formColor}><img src="logo.png" alt="" />
            </div>
            <div className={styles.form}>
                
                    <p className={styles.titulo}>Esportista</p>
                    <form action="">
                        <Input nome={'usuario:'} type={'text'} placeholder={'Digite seu usuário ou email'} />
                        <Input nome={'senha:'} type={'password'} placeholder={'Digite sua senha'} />
                    </form>
                    <a href="/home"><Button nome={'Entrar'} /></a>
                    <a href="" className={styles.esqueceuSenha}>esqueceu a senha?</a>
                    <button className={styles.google}><FcGoogle /> Continuar com o Google</button>
                    <button className={styles.google}><FaFacebook /> Continuar com o Facebook</button>
                    <p className={styles.cadastro}>Sem uma conta?<a href="/cadastro" >cadastrar</a></p>
                </div>
                
            </div>
        </div>
    );
}

export default Login;
