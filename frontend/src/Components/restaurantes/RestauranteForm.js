import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Button } from 'react-bootstrap';

const RestauranteForm = (props) => {

  const validationSchema = Yup.object().shape({
    cant_mesas: Yup.number().integer().required('cant_mesas is required'),
    direccion: Yup.string().required('Required'),
  });

  return (
    <div className='form-wrapper'>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className='mb-3'>
            <label htmlFor='cant_mesas'>cant_mesas</label>
            <Field
              name='cant_mesas'
              type='text'
              className='form-control'
              placeholder='cant_mesas'
            />
            <ErrorMessage
              name='cant_mesas'
              className='d-block invalid-feedback'
              component='span'
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <label htmlFor='direccion'>direccion</label>
            <Field
              name='direccion'
              type='text'
              className='form-control'
              placeholder='direccion'
            />
            <ErrorMessage
              name='direccion'
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

export default RestauranteForm;
