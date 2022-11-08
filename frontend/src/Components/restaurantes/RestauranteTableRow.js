import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestauranteDataService from "../../Services/restaurante.service";
  
const RestauranteTableRow = (props) => {
  const { id,cant_mesas,direccion} = props.obj;
  
  const deleteRestaurante = () => {
    RestauranteDataService.remove(id)
      .then((res) => {
        if (res.status === 200) {
          alert("Restaurante successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{cant_mesas}</td>
      <td>{direccion}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-restaurante/" + id}>
          Edit
        </Link>
        <Button onClick={deleteRestaurante} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default RestauranteTableRow;