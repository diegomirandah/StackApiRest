// Import Modules
import React, { useState, useEffect } from 'react';
import ReservaDataService from '../../Services/reserva.service';
import ReservaForm from './ReservaForm';

const CreateReserva = () => {
  const [formValues, setFormValues] = useState({
    fecha: '',
    cant_persona: '',
    disp: '',
    clienteId: '',
    restauranteId: '',
  });
  const onSubmit = (productObject) => {
    ReservaDataService.create(productObject)
      .then((res) => {
        if (res.status === 200) alert('Reserva successfully created');
        else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  // Return product form
  return (
    <ReservaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create reserva
    </ReservaForm>
  );
};

// Export CreateReserva Component
export default CreateReserva;
