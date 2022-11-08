// Import Modules
import React, { useState, useEffect } from "react";
import ReservaDataService from "../../Services/reserva.service";
import ReservaForm from "./ReservaForm";

const EditReserva = (props) => {
  const [formValues, setFormValues] = useState({
    fecha: "",
    cant_persona: "",
  });
    
  //onSubmit handler
  const onSubmit = (ReservaObject) => {
    ReservaDataService
      .update(props.match.params.id, ReservaObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Reserva successfully updated");
          props.history.push("/reserva-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize reserva form
  useEffect(() => {
    ReservaDataService.get(props.match.params.id)
      .then((res) => {
        const { disp,clienteId,restauranteId } = res.data;
        setFormValues({ disp,clienteId,restauranteId});
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return reserva form
  return (
    <ReservaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Reserva
    </ReservaForm>
  );
};
  
// Export EditReserva Component
export default EditReserva;