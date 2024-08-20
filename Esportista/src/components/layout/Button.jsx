const Button = ({nome, onClick}) => {
    return(
        <button onClick={onClick}>{nome}</button>
    )
}

export default Button;