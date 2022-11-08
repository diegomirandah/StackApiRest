import React, { useState, useEffect } from "react";
import ClienteDataService from "../../Services/cliente.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import ClienteTableRow from "./ClienteTableRow";
  
const ClienteList = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    ClienteDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <ClienteTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Row>
        <Col>
          <h2>Cliente list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-clientes"}>
            <Button>Create cliente</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>rut</th>
                <th>correo</th>
                <th>nombre</th>
                <th>telefono</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
  
export default ClienteList;