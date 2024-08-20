import styles from "./Input.module.css";

const Input = ({ type, placeholder, nome }) => {
    return (
        <div className={styles.column}>
            <label htmlFor={nome} className={styles.label}>
                {nome}
                </label>
                <input 
                className={styles.input}
                type={type} 
                name={nome}
                placeholder={placeholder} 
                required="" 
                minLength={7} 
                maxLength={75} 
                />
        </div>
    )
}

export default Input;