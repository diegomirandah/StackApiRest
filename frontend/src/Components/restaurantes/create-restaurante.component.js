// Import Modules
import React, { useState, useEffect } from 'react';
import RestauranteDataService from '../../Services/restaurante.service';
import RestauranteForm from './RestauranteForm';

const CreateRestaurante = () => {
  const [formValues, setFormValues] = useState({
    cant_mesas: '',
    direccion: '',
  });
  const onSubmit = (clientObject) => {
    RestauranteDataService.create(clientObject)
      .then(res => {
        if (res.status === 200) alert('Restaurante successfully created');
        else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  // Return client form
  return (
    <RestauranteForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Restaurante
    </RestauranteForm>
  );
};

// Export CreateRestaurante Component
export default CreateRestaurante;
