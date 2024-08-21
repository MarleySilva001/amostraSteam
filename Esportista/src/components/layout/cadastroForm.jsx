import Input from "./Input";

const CadastroForm = ({onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
                        <Input nome={'nome completo:'} type={'text'} placeholder={'Digite seu seu nome completo'} />
                        <Input nome={'email:'} type={'email'} placeholder={'Digite seu seu email'} />
                        <Input nome={'usuario:'} type={'text'} placeholder={'Digite seu usuário'} />
                        <Input nome={'senha:'} type={'password'} placeholder={'Digite sua senha'} />
                        <Input nome={'confirmar a senha:'} type={'password'} placeholder={'Digite novamente sua senha'} />
                   </form>
    )
};

export default CadastroForm;