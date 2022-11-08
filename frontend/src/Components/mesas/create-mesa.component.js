// Import Modules
import React, { useState, useEffect } from 'react';
import MesaDataService from '../../Services/mesa.service';
import MesaForm from './MesaForm';

const CreateMesa = () => {
  const [formValues, setFormValues] = useState({
    ambiente: '',
    cant_mesa_reserva: '',
    reservaID: ''
  });
  const onSubmit = (productObject) => {
    MesaDataService.create(productObject)
      .then((res) => {
        if (res.status === 200) alert('Mesa successfully created');
        else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  // Return product form
  return (
    <MesaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create mesa
    </MesaForm>
  );
};

// Export CreateMesa Component
export default CreateMesa;
