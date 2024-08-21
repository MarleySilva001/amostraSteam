import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/layout/Button';
import axios from "axios";
import styles from "./Cadastro.module.css";
import CadastroForm from '../components/layout/cadastroForm';

export default function Cadastro() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/usuarios', formData);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Houve um erro ao cadastrar.');
        }
    };

    return(
        <div className={styles.row}>
            <div className={styles.form}>
                <div className={styles.box}>
                    <p className={styles.titulo}>Esportista</p>
                    <CadastroForm />
                    <Link to={'/home'}><Button nome={'Cadastrar'} /></Link>
                    <p className={styles.cadastro}>Já tem uma conta?<a href="/login" >Conectar</a></p>
                </div>
            </div>
        </div>
    )
}