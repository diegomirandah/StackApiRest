import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReservaDataService from "../../Services/reserva.service";
  
const ReservaTableRow = (props) => {
  const { id, fecha, cant_persona, disp } = props.obj;
  
  const deleteReserva = () => {
    ReservaDataService.remove(id)
      .then((res) => {
        if (res.status === 200) {
          alert("Reserva successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{fecha}</td>
      <td>{cant_persona}</td>
      <td>{disp}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-reserva/" + id}>
          Edit
        </Link>
        <Button onClick={deleteReserva} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ReservaTableRow;