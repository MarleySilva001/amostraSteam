import React from 'react';
import { Link } from 'react-router-dom';
import { IoChatbubblesSharp, IoHomeSharp, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { PiSoccerBallFill } from "react-icons/pi";
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
    <div className={style.cimento}></div>
    <div className={style.start}>
      <div className={style.logo}>
      <a href="/home"><img src="logo.png" alt="" /> Esportista</a>
      </div>
      <nav>
        <ul className={style.lista}>
          <li className={style.item}>           
            <Link to={'/home'}> <IoHomeSharp /> Inicio</Link>
          </li>
          <li className={style.item}>           
            <Link to={'/esportes'}><PiSoccerBallFill />Esportes</Link>
          </li>
          <li className={style.item}>      
            <Link to={'/redesocial'}><IoChatbubblesSharp />Explorar</Link>
          </li>
          <li className={style.item}>
            <Link to={'/perfil'}><IoPerson />Perfil</Link>
          </li>
          <li className={style.item}>
            <Link to={'/configuracoes'}><IoSettingsSharp />Configurações</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default NavBar;
