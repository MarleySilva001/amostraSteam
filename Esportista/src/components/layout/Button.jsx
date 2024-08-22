import React from "react";
import style from "./Button.module.css";

const Button = ({nome, onClick, type}) => {
    return(
        <div>
        <button 
        onClick={onClick} 
        type={type}
        className={style.button}
        >{nome}</button>
        </div>
    )
}

export default Button;