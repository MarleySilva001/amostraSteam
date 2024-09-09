import React from 'react';
import styles from "./styles/Input.module.css";

const Input = ({ type, placeholder, nome, value, onChange, name }) => {
    return (
        <div className={styles.column}>
            <label htmlFor={name} className={styles.label}>
                {nome}
            </label>
            <input 
                className={styles.input}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                required 
                minLength={4} 
                maxLength={75} 
            />
        </div>
    );
}

export default Input;