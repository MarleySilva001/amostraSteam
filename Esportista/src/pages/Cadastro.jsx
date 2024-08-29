import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
    const [error,setError] = useState('')
    const Navigate = useNavigate()
         
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
        localStorage.setItem('usuario', formData.usuario);

        try {
            await axios.post('http://localhost:5000/usuarios', formData);
            alert('Cadastro realizado com sucesso!');
            localStorage.setItem('usuario', formData.usuario);
            Navigate('/home')
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
                    {error && <p className={styles.error}>{error}</p>}
                    <p className={styles.cadastro}>
                        Já tem uma conta? <Link to="/login">Conectar</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}