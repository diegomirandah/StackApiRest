import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClienteDataService from "../../Services/cliente.service";
  
const ClienteTableRow = (props) => {
  const { id,rut,correo,nombre,telefono } = props.obj;
  
  const deleteCliente = () => {
    ClienteDataService.remove(id)
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
          to={"/edit-cliente/" + id}>
          Edit
        </Link>
        <Button onClick={deleteCliente} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ClienteTableRow;