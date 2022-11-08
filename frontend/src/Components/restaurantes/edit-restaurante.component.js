// Import Modules
import React, { useState, useEffect } from 'react';
import RestauranteDataService from '../../Services/restaurante.service';
import RestauranteForm from './RestauranteForm';

const EditRestaurante = (props) => {
  const [formValues, setFormValues] = useState({
    password: '',
    num_local: '',
  });

  //onSubmit handler
  const onSubmit = (ClientObject) => {
    RestauranteDataService.update(props.match.params.id, ClientObject)
      .then((res) => {
        if (res.status === 200) {
          alert('Client successfully updated');
          props.history.push('/restaurante-list');
        } else Promise.reject();
      })
      .catch((err) => alert('Something went wrong'));
  };

  // Load data from server and reinitialize client form
  useEffect(() => {
    RestauranteDataService.get(props.match.params.id)
      .then((res) => {
        const { rut} = res.data;
        setFormValues({ rut});
      })
      .catch((err) => console.log(err));
  }, []);

  // Return client form
  return (
    <RestauranteForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Client
    </RestauranteForm>
  );
};

// Export EditRestaurante Component
export default EditRestaurante;
