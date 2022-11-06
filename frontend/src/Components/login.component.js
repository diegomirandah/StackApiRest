import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import LoginDataService from "../Services/login.service";
  
const Login = (props) => {
  const [formValues, setFormValues] = useState({correo:'', password:''});
  const onSubmit = loginObject => {
    LoginDataService.login(loginObject)
      .then(res => {
        if (res.status === 200)
          alert('login successfully ')
        else
          Promise.reject()
      })
      .catch(err => alert('Algo salió mal'))
  }

  const validationSchema = Yup.object().shape({
    correo: Yup.string()
          .email("You have enter an invalid email address")
          .required("Required"),
    password: Yup.string().required("Required")
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className="mb-3">
            <label htmlFor="correo">Correo</label>
            <Field name="correo" type="text" className="form-control" placeholder="Correo"/>
            <ErrorMessage name="correo" className="d-block invalid-feedback" component="span" />
          </FormGroup >
          <FormGroup className="mb-3">
            <label htmlFor="password">Password</label>
            <Field name="password" type="text" className="form-control" placeholder="Password"/>
            <ErrorMessage name="password" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          
          <Button  size="lg" type="submit">
            {props.children}
          </Button>
          
        </Form>
      </Formik>
    </div>
  );
};
  
export default Login;