import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MesaDataService from "../../Services/mesa.service";
  
const MesaTableRow = (props) => {
  const { id, ambiente,cant_mesa_reserva } = props.obj;
  
  const deleteMesa = () => {
    MesaDataService.remove(id)
      .then((res) => {
        if (res.status === 200) {
          alert("Mesa successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{ambiente}</td>
      <td>{cant_mesa_reserva}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-mesa/" + id}>
          Edit
        </Link>
        <Button onClick={deleteMesa} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default MesaTableRow;