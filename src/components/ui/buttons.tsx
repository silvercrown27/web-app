const Button = ({text, filled, color} : {text: string, filled: boolean, color: string}) => {
    return(
        <button className="custom-button animate-spin">
            {text}
        </button>
    );
}

export default Button;