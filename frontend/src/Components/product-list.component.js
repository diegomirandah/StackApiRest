import React, { useState, useEffect } from "react";
import ProductDataService from "../Services/product.service";
import { Table } from "react-bootstrap";
import ProductTableRow from "./ProductTableRow";
  
const ProductList = () => {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    ProductDataService.getAll()
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return product.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ProductList;