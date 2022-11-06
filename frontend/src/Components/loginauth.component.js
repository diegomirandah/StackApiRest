// Import Modules
import React, { useState, useEffect } from "react";
import LoginDataService from "../Services/login.service";
import Login from "./login.component";
  
const LoginCliente = () => {
  const [formValues, setFormValues] = useState({correo:'', password:''});
  const onSubmit = clientObject => {
    LoginDataService.signIn(clientObject)
      .then(res => {
        if (res.status === 200)
          alert('Client successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Algo salió mal'))
  }
    
  // Return client form
  return(
    <Login initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Loginaaaaaa
    </Login>
  )
}
  
// Export CreateCliente Component
export default LoginCliente