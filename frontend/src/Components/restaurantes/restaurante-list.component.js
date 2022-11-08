import React, { useState, useEffect } from "react";
import RestauranteDataService from "../../Services/restaurante.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import RestauranteTableRow from "./RestauranteTableRow";
  
const RestauranteList = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    RestauranteDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <RestauranteTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Row>
        <Col>
          <h2>Restaurante list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-restaurantes"}>
            <Button>Create restaurante</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>cant_mesas</th>
                <th>direccion</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
  
export default RestauranteList;