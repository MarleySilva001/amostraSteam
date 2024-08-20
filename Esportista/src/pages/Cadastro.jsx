import React from 'react';
import Button from '../components/layout/Button';
import Input from '../components/layout/Input';
import styles from "./Cadastro.module.css";

export default function Cadastro() {
    return(
        <div className={styles.row}>
            <div className={styles.form}>
                <div className={styles.box}>
                    <p className={styles.titulo}>Esportista</p>
                    <form action="">
                        <Input nome={'nome completo:'} type={'text'} placeholder={'Digite seu seu nome completo'} />
                        <Input nome={'email:'} type={'email'} placeholder={'Digite seu seu email'} />
                        <Input nome={'usuario:'} type={'text'} placeholder={'Digite seu usuário'} />
                        <Input nome={'senha:'} type={'password'} placeholder={'Digite sua senha'} />
                        <Input nome={'confirmar a senha:'} type={'password'} placeholder={'Digite novamente sua senha'} />
                    </form>
                    <a href="/home"><Button nome={'Cadastrar'} /></a>
                </div>
                <div className={styles.box}>
                    <p className={styles.cadastro}>Já tem uma conta?<a href="/cadastro" >Conectar</a></p>
                    
                </div>
            </div>
        </div>
    )
}