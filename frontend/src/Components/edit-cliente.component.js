// Import Modules
import React, { useState, useEffect } from "react";
import ClienteDataService from "../Services/cliente.service";
import ClienteForm from "./ClienteForm";

const EditCliente = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
  });
    
  //onSubmit handler
  const onSubmit = (ClientObject) => {
    ClienteDataService
      .update(props.match.params.id, ClientObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully updated");
          props.history.push("/client-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize client form
  useEffect(() => {
    ClienteDataService.get(props.match.params.id)
      .then((res) => {
        const { name, address, email } = res.data;
        setFormValues({ name, address, email });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return client form
  return (
    <ClienteForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Client
    </ClienteForm>
  );
};
  
// Export EditCliente Component
export default EditCliente;