import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import CategoryDataService from "../Services/category.service";
  
const ProductForm = (props) => {
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
      description: Yup.string(),
      stock: Yup.number().min(0,"No puede ser menor a 0").required(),
      categoryId: Yup.number().min(0,"No puede ser menor a 0").required()
    });

    const DataSelect = () => {
      return category.map((res, i) => {
        return (<option obj={res} key={i} value={res.id}>{res.name}</option>);
      });
    };
  
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
              <label htmlFor="description">Description</label>
              <Field name="description" type="text" className="form-control" placeholder="Description"/>
              <ErrorMessage name="description" className="d-block invalid-feedback" component="span" />
            </FormGroup>
            <FormGroup className="mb-3">
              <label htmlFor="stock">Stock</label>
              <Field name="stock" type="number" className="form-control" placeholder="Number"/>
              <ErrorMessage name="stock" className="d-block invalid-feedback" component="span" />
            </FormGroup >
            <FormGroup className="mb-3">
              <label htmlFor="categoryId">Category</label>
              <Field as="select" name="categoryId">
                <option disabled value="">(select)</option>
                {DataSelect()}
             </Field>
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
    
  export default ProductForm;