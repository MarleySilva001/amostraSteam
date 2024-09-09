import React from 'react';
import Input from './Input';
import Button from './Button';
import styles from './styles/cadastroForm.module.css'

const CadastroForm = ({ onChange, formData, onSubmit }) => {
    return (
        <form className={styles.center} onSubmit={onSubmit}>
            <Input 
                nome={'Nome completo'}
                type={'text'} 
                placeholder={'Digite seu nome completo'} 
                value={formData.nome}
                onChange={onChange}
                name="nome"
            />
            <Input 
                nome={'Email'}
                type={'email'} 
                placeholder={'Digite seu email'} 
                value={formData.email}
                onChange={onChange}
                name="email"
            />
            <Input 
                nome={'Usuário'}
                type={'text'} 
                placeholder={'Digite seu usuário'} 
                value={formData.usuario}
                onChange={onChange}
                name="usuario"
            />
            <Input 
                nome={'Senha'}
                type={'password'} 
                placeholder={'Digite sua senha'} 
                value={formData.senha}
                onChange={onChange}
                name="senha"
            />
            <Input 
                nome={'Confirmar Senha'}
                type={'password'} 
                placeholder={'Digite novamente sua senha'} 
                value={formData.confirmarSenha}
                onChange={onChange}
                name="confirmarSenha"
            />
            <Button type={'submit'} nome={'Cadastrar'} />
        </form>
    );
};

export default CadastroForm;