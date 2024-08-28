import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoChatbubblesSharp, IoHomeSharp, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { PiSoccerBallFill } from "react-icons/pi";
import style from './NavBar.module.css';
import logo from '/logo.png'

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className={style.cimento}></div>
      <div className={style.start}>
        <div className={style.logo}>
          <Link to={'/home'}><img src={logo} alt="Logo" /> Esportista</Link>
        </div>
        <nav>
          <ul className={style.lista}>
            <li className={`${style.item} ${location.pathname === '/home' ? style.active : ''}`}>
              <Link to={'/home'}> <IoHomeSharp /> Início</Link>
            </li>
            <li className={`${style.item} ${location.pathname === '/esportes' || location.pathname === '/esportes/volei' || location.pathname === '/esportes/basquete' || location.pathname === '/esportes/americano' ? style.active : ''}`}>
              <Link to={'/esportes'}><PiSoccerBallFill /> Esportes</Link>
            </li>
            <li className={`${style.item} ${location.pathname === '/redesocial' ? style.active : ''}`}>
              <Link to={'/redesocial'}><IoChatbubblesSharp /> Explorar</Link>
            </li>
            <li className={`${style.item} ${location.pathname === '/perfil' ? style.active : ''}`}>
              <Link to={'/perfil'}><IoPerson /> Perfil</Link>
            </li>
            <li className={`${style.item} ${location.pathname === '/configuracoes' ? style.active : ''}`}>
              <Link to={'/configuracoes'}><IoSettingsSharp /> Configurações</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
