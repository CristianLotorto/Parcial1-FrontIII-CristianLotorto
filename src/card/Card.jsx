import styleCard from "../card/Card.css";

function Card({userName, userLastName}) {
    
    return(

        <div className="container">

            <h2 className="title" >Hola {userName}!</h2>

            <p className="text">Tu nombre completo es: {userName} {userLastName}.</p>

        </div>

    );

}

export default Card;