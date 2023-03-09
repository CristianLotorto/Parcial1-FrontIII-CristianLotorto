import styleButton from "../button/Button.module.css";

function Button( {text, type} ) {

    return(

        <button 
        
        className={styleButton.button}
        type = { type }
        >

            { text }

        </button>

    );    

}

export default Button;