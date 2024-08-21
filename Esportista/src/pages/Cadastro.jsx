import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "./Cadastro.module.css";
import CadastroForm from '../components/layout/cadastroForm';
import Button from '../components/layout/Button';

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        usuario: '',
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        try {
            await axios.post('http://localhost:5000/usuarios', formData);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Houve um erro ao cadastrar.');
        }
    };

    return (
        <div className={styles.row}>
            <div className={styles.form}>
                <div className={styles.box}>
                    <p className={styles.titulo}>Esportista</p>
                    <CadastroForm onChange={handleChange} formData={formData} onSubmit={handleSubmit} />
                    <p className={styles.cadastro}>
                        Já tem uma conta? <Link to="/login">Conectar</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}