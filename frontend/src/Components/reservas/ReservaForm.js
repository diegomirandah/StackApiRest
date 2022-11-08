import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import ClienteDataService from "../../Services/cliente.service";
import RestauranteDataService from "../../Services/restaurante.service";
  
const ReservaForm = (props) => {
    const [cliente, setCliente] = useState([]);
    useEffect(() => {
      ClienteDataService.getAll()
        .then(({ data }) => {
          setCliente(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const [restaurante, setRestaurante] = useState([]);
    useEffect(() => {
      RestauranteDataService.getAll()
        .then(({ data }) => {
          setRestaurante(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);  

    const validationSchema = Yup.object().shape({
      fecha: Yup.date().required("Required"),
      cant_persona: Yup.number(),
      disp: Yup.number().min(0,"No puede ser menor a 0").required(),
      clienteId: Yup.number().min(0,"No puede ser menor a 0").required(),
      restauranteId: Yup.number().min(0,"No puede ser menor a 0").required()
    });

    const ClienteDataSelect = () => {
      return cliente.map((res, i) => {
        return (<option obj={res} key={i} value={res.id}>{res.id}</option>);
      });
    };
    const RestauranteDataSelect = () => {
      return restaurante.map((res, i) => {
        return (<option obj={res} key={i} value={res.id}>{res.id}</option>);
      });
    };  
    return (
      <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
          <Form>
            <FormGroup className="mb-3">
              <label htmlFor="fecha">fecha</label>
              <Field name="fecha" type="datetime-local" className="form-control" placeholder="fecha"/>
              <ErrorMessage name="fecha" className="d-block invalid-feedback" component="span" />
            </FormGroup>
            <FormGroup className="mb-3">
              <label htmlFor="cant_persona">cant_persona</label>
              <Field name="cant_persona" type="number" className="form-control" placeholder="cant_persona"/>
              <ErrorMessage name="cant_persona" className="d-block invalid-feedback" component="span" />
            </FormGroup>
            <FormGroup className="mb-3">
              <label htmlFor="disp">disp</label>
              <Field name="disp" type="number" className="form-control" placeholder="disp"/>
              <ErrorMessage name="disp" className="d-block invalid-feedback" component="span" />
            </FormGroup >
            <FormGroup className="mb-3">
              <label htmlFor="clienteId">Cliente</label>
              <Field as="select" name="clienteId">
                <option disabled value="">(select)</option>
                {ClienteDataSelect()}
             </Field>
            </FormGroup >
            <FormGroup className="mb-3">
              <label htmlFor="restauranteId">Restaurante</label>
              <Field as="select" name="restauranteId">
                <option disabled value="">(select)</option>
                {RestauranteDataSelect()}
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
    
  export default ReservaForm;