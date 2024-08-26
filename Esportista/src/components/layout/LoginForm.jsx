import Input from "./Input";
import Button from "./Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <form className={styles.center}>
            <Input 
            nome={'usuario'} 
            type={'text'} 
            placeholder={'Digite seu usuário ou email'} 
            />
            <Input 
            nome={'senha'} 
            type={'password'} 
            placeholder={'Digite sua senha'} 
            />
            <a href="" className={styles.esqueceuSenha}>esqueceu a senha?</a>
            <Button nome={'Entrar'} />
        </form>
    )
}

export default LoginForm;