// Import Modules
import React, { useState, useEffect } from 'react';
import AdminDataService from '../../Services/admin.service';
import AdminForm from './AdminForm';

const CreateAdmin = () => {
  const [formValues, setFormValues] = useState({
    rut: '',
    password: '',
    num_local: ''
  });
  const onSubmit = (clientObject) => {
    AdminDataService.create(clientObject)
      .then(res => {
        if (res.status === 200) alert('Admin successfully created');
        else Promise.reject();
      })
      .catch((err) => alert('Algo salió mal'));
  };

  // Return client form
  return (
    <AdminForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create admins
    </AdminForm>
  );
};

// Export CreateAdmin Component
export default CreateAdmin;
