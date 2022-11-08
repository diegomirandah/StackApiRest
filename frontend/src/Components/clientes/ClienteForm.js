import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Button } from 'react-bootstrap';
import CategoryDataService from '../../Services/category.service';

const ClienteForm = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    CategoryDataService.getAll()
      .then(({ data }) => {
        setCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validationSchema = Yup.object().shape({
    rut: Yup.number().integer().required('Rut is required'),
    password: Yup.string().required('Required'),
    correo: Yup.string()
      .email('You have enter an invalid email address')
      .required('Required'),
    nombre: Yup.string().required('Required'),
    telefono: Yup.number().integer().required('telefono is required'),
  });

  return (
    <div className='form-wrapper'>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className='mb-3'>
            <label htmlFor='rut'>Rut</label>
            <Field
              name='rut'
              type='text'
              className='form-control'
              placeholder='Rut'
            />
            <ErrorMessage
              name='rut'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <label htmlFor='password'>Password</label>
            <Field
              name='password'
              type='text'
              className='form-control'
              placeholder='Password'
            />
            <ErrorMessage
              name='password'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <label htmlFor='correo'>Correo</label>
            <Field
              name='correo'
              type='text'
              className='form-control'
              placeholder='Correo'
            />
            <ErrorMessage
              name='correo'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <label htmlFor='nombre'>Nombre</label>
            <Field
              name='nombre'
              type='text'
              className='form-control'
              placeholder='Nombre'
            />
            <ErrorMessage
              name='nombre'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <label htmlFor='telefono'>Telefono</label>
            <Field
              name='telefono'
              type='text'
              className='form-control'
              placeholder='Telefono'
            />
            <ErrorMessage
              name='telefono'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <Button size='lg' type='submit'>
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ClienteForm;
