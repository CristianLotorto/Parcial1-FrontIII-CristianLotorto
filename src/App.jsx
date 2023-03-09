import styleApp from "../src/App.css";
import { useState } from "react";
import Button from "./button/Button";
import Card from "./card/Card";

function App() {

  const [ userName, setUserName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ error, setError] = useState("");
  const [ render, setRender] = useState("render")

  const handlerOnSubmit = (e) => {

    e.preventDefault();

    const userNameValid = validateUserName(userName);

    const lastNameValid = validateLastName(lastName);

    if(!userNameValid || !lastNameValid) {

      setError("Por favor chequea que la información sea correcta")

    }else {

      setRender("container");

    }

  }

  const handlerOnChangeUserName = (e) => {
    
    setUserName(e.target.value);

  }

  const handlerOnChangeLastName = (e) => {
    
    setLastName(e.target.value);

  }

  const validateUserName = (userName) => {

    const withoutSpaces= userName.trim();

    if(withoutSpaces.length > 3) {

      return true;

    }else {

      return false;

    }

  };

  
  const validateLastName = (lastName) => {

    const withoutSpaces= lastName.trim();

    if(withoutSpaces.length > 6) {

      return true;

    }else {

      return false;

    }

  };
  




  return (
    
    <>
    <div className="form">
      
      
      <h1 className="title">Examen Front III - Cristian Lotorto</h1>

      <form onSubmit = {handlerOnSubmit} >

        <input 
        
        type = "text"
        placeholder = " Enter User Name"
        value = { userName }
        onChange = { handlerOnChangeUserName } 
        
        />

        <input 
        
        type = "text"
        placeholder = " Enter Lastname"
        value = { lastName }
        onChange = { handlerOnChangeLastName }

        />

      <p> {error} </p>
      </form>


      <Button 
      
      text= "Send" 
      type="submit" 

      />

    </div>

    <Card 
  
    userName= { userName } 
    userLastName = { lastName }

    />

    </>
    
    
  );
}

export default App;
