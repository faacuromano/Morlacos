import React, {useState} from 'react'

import './Form.css'


const Form = () => {

   const [valueName, setValueName] = useState("Nombre")
   const [valueLastName, setValueLastName] = useState("Apelllido")
   const [valueMail, setValueMail] = useState("Mail")
   const [valueMessage, setValueMessage] = useState("Mensaje")
    
    const inputHandler = (e) => {
        console.log(e.target.value)
    }

    const clearInputName = () => {
        setValueName(" ")
    }
    
    const clearInputLastName = () => {
        setValueLastName(" ")
    }

    const clearInputMail = () => {
        setValueMail(" ")
    }

    const clearInputMessage = () => {
        setValueMessage(" ")
    }

  return (
    <div>
    <div className='formContainer'>

        <input 
        type={"text"} 
        value={valueName} 
        className='inputForm' 
        onChange={inputHandler} 
        onClick={clearInputName}>
        </input>

        <input 
        type={"text"} 
        value={valueLastName} 
        className='inputForm' 
        onChange={inputHandler} 
        onFocus={clearInputLastName}>
        </input>

        <input 
        value={valueMail} 
        className='inputForm' 
        onChange={inputHandler} 
        onFocus={clearInputMail}> 
        </input>

        <input 
        type={"text"} 
        id="message" 
        value={valueMessage} 
        className='inputForm' 
        onChange={inputHandler} 
        onFocus={clearInputMessage}>
        </input>

    </div>
    </div>
  )
}

export default Form