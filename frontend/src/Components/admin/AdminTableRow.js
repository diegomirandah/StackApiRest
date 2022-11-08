import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminDataService from "../../Services/admin.service";
  
const AdminTableRow = (props) => {
  const { id,rut,password,num_local} = props.obj;
  
  const deleteAdmin = () => {
    AdminDataService.remove(id)
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
      <td>{password}</td>
      <td>{num_local}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-admin/" + id}>
          Edit
        </Link>
        <Button onClick={deleteAdmin} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default AdminTableRow;