import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import CategoryDataService from "../Services/category.service";
  
const ClientForm = (props) => {
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
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string()
        .email("You have enter an invalid email address")
        .required("Required"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className="mb-3">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" placeholder="Name"/>
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="address">Address</label>
            <Field name="address" type="text" className="form-control" placeholder="Address"/>
            <ErrorMessage name="address" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" className="form-control" placeholder="Email"/>
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
          </FormGroup >
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default ClientForm;