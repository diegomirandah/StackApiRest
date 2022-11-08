import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDataService from "../Services/product.service";
  
const ProductTableRow = (props) => {
  const { id, name, description, stock } = props.obj;
  
  const deleteProduct = () => {
    ProductDataService.remove(id)
      .then((res) => {
        if (res.status === 200) {
          alert("Product successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{stock}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-product/" + id}>
          Edit
        </Link>
        <Button onClick={deleteProduct} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ProductTableRow;