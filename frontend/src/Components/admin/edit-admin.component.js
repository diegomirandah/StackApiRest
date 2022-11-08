// Import Modules
import React, { useState, useEffect } from 'react';
import AdminDataService from '../../Services/admin.service';
import AdminForm from './AdminForm';

const EditAdmin = (props) => {
  const [formValues, setFormValues] = useState({
    password: '',
    num_local: '',
  });

  //onSubmit handler
  const onSubmit = (ClientObject) => {
    AdminDataService.update(props.match.params.id, ClientObject)
      .then((res) => {
        if (res.status === 200) {
          alert('Client successfully updated');
          props.history.push('/admin-list');
        } else Promise.reject();
      })
      .catch((err) => alert('Something went wrong'));
  };

  // Load data from server and reinitialize client form
  useEffect(() => {
    AdminDataService.get(props.match.params.id)
      .then((res) => {
        const { rut} = res.data;
        setFormValues({ rut});
      })
      .catch((err) => console.log(err));
  }, []);

  // Return client form
  return (
    <AdminForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Client
    </AdminForm>
  );
};

// Export EditAdmin Component
export default EditAdmin;
