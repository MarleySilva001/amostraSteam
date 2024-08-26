import React,{ useState,useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
const Navigate = useNavigate()
const [usuario,setUsuario] = useState('')
const [senha, setSenha] = useState('')
const [users, setUsers] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../db.json');
        setUsers(response.data.usuarios);
      } catch (error) {
        setErro('Erro ao buscar os dados');
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, []); 

const handleButton = () => {
    const user = users.find(user => user.usuario === usuario)
    if (user.usuario === usuario && user.senha === senha) {
        localStorage.setItem('usuario', usuario);
        Navigate('/home')
    }else{
        alert('usuario ou senha está errado')
    }
    
}

    return (
        <form className={styles.center}>
            <Input 
            nome={'usuario'} 
            type={'text'} 
            placeholder={'Digite seu usuário ou email'} 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            />
            <Input 
            nome={'senha'} 
            type={'password'} 
            placeholder={'Digite sua senha'} 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <a href="" className={styles.esqueceuSenha}>esqueceu a senha?</a>
            <Button onClick={handleButton} nome={'Entrar'} />
        </form>
    )
}

export default LoginForm;