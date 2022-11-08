import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Button } from 'react-bootstrap';

const AdminForm = (props) => {
  const validationSchema = Yup.object().shape({
    rut: Yup.number().integer().required('Rut is required'),
    password: Yup.string().required('Required'),
    num_local: Yup.number().integer().required('telefono is required'),
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
            <label htmlFor='num_local'>num_local</label>
            <Field
              name='num_local'
              type='text'
              className='form-control'
              placeholder='num_local'
            />
            <ErrorMessage
              name='num_local'
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

export default AdminForm;
