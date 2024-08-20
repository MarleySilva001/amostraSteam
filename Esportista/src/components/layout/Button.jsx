import React from "react";
import style from "./Button.module.css";

const Button = ({nome, onClick}) => {
    return(
        <div>
        <button onClick={onClick} className={style.button}>{nome}</button>
        </div>
    )
}

export default Button;