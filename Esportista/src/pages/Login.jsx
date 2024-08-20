import React from 'react';
import styles from './Login.module.css'
import Button from '../components/layout/Button';
import Input from '../components/layout/Input';

const Login = () => {
    return (
        <div className={styles.row}>
            <div><img src="" alt="" /></div>
            <div>
                <p>Esportista</p>
                <Input 
                type={text}
                placeholder={'Digite seu usuario'}
                required={true}
                />
                <Input 
                type={password}
                placeholder={'Digite sua senha'}
                required={true}
                />
                <a href="/home"><Button nome={'Entrar'}/></a>
                <div><a href=""><img src="" alt="" />Entrar com o google</a></div>
                <a href="">esqueceu a senha!</a>
                <a href="/cadastro">cadastrar</a>
                <a href=""><Button nome={'entrar sem login'}/></a>
            </div>
        </div>
    );
}

export default Login;
