// Import Modules
import React, { useState, useEffect } from "react";
import ClienteDataService from "../../Services/cliente.service";
import ClienteForm from "./ClienteForm";
  
const CreateCliente = () => {
  const [formValues, setFormValues] = useState({ rut: '', password: '', correo: '', nombre: '', telefono: '' });
  const onSubmit = clientObject => {
    ClienteDataService.create(clientObject)
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
    <ClienteForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create clientes
    </ClienteForm>
  )
}
  
// Export CreateCliente Component
export default CreateCliente