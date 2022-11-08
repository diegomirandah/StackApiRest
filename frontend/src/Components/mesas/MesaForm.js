import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import ReservaDataService from "../../Services/reserva.service";
  
const MesaForm = (props) => {
    const [reserva, setReserva] = useState([]);
    useEffect(() => {
      ReservaDataService.getAll()
        .then(({ data }) => {
          setReserva(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const validationSchema = Yup.object().shape({
      ambiente: Yup.string().required("Required"),
      cant_mesa_reserva: Yup.number().required("Required"),
      reservaId: Yup.number().min(0,"No puede ser menor a 0").required(),
    });

    const ReservaDataSelect = () => {
      return reserva.map((res, i) => {
        return (<option obj={res} key={i} value={res.id}>{res.id}</option>);
      });
    };

    return (
      <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
          <Form>
            <FormGroup className="mb-3">
              <label htmlFor="ambiente">ambiente</label>
              <Field name="ambiente" type="text" className="form-control" placeholder="ambiente"/>
              <ErrorMessage name="ambiente" className="d-block invalid-feedback" component="span" />
            </FormGroup>
            <FormGroup className="mb-3">
              <label htmlFor="cant_mesa_reserva">cant_mesa_reserva</label>
              <Field name="cant_mesa_reserva" type="number" className="form-control" placeholder="cant_mesa_reserva"/>
              <ErrorMessage name="cant_mesa_reserva" className="d-block invalid-feedback" component="span" />
            </FormGroup>
            <FormGroup className="mb-3">
              <label htmlFor="reservaId">Reserva</label>
              <Field as="select" name="reservaId">
                <option disabled value="">(select)</option>
                {ReservaDataSelect()}
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
    
  export default MesaForm;