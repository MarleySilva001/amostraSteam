const Input = ({type, placeholder, required}) => {
    return(
        <input 
        type={type}
        placeholder={placeholder}
        maxLength={75}
        minLength={7}
        required={required}
        />
    )
}

export default Input;