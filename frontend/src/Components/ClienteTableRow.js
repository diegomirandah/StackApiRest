import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClienteDataService from "../Services/cliente.service";
  
const ClienteTableRow = (props) => {
  const { rut,correo,nombre,telefono } = props.obj;
  
  const deleteClient = () => {
    ClienteDataService.remove(rut)
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{rut}</td>
      <td>{correo}</td>
      <td>{nombre}</td>
      <td>{telefono}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-client/" + rut}>
          Edit
        </Link>
        <Button onClick={deleteClient} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ClienteTableRow;