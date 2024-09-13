import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavEsporte from "../components/layout/NavEsporte";


const Configuracoes = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [users, setUsers] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.delete('../db.json');
        setUsers(response.data.usuarios);
      } catch (error) {
        setErro('Erro ao buscar os dados');
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://sua-api.com/usuarios/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      alert('Usuário deletado com sucesso');
    } catch (error) {
      setErro('Erro ao deletar o usuário');
    }
  };

  const handleButton = () => {
    const user = users.find(user => user.usuario === usuario);
    if (user && user.senha === senha) {
      localStorage.setItem('usuario', usuario);
      navigate('/home');
    } else {
      alert('Usuário ou senha está errado');
    }
  };

  return (
    <>
      <NavEsporte
        children={
          <div>
            <button>apagar conta</button>
          </div>
        }
      />

    </>
  );
};

export default Configuracoes;