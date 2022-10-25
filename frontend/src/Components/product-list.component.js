import React, { useState, useEffect } from "react";
import ProductDataService from "../Services/product.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <Row>
        <Col>
          <h2>Product list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-Product/"}>
            <Button>Create product</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </div>
  );
};
  
export default ProductList;