import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/client.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientTableRow from "./ClientTableRow";
  
const ClientList = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    ClientDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <ClientTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Row>
        <Col>
          <h2>Client list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-client/"}>
            <Button>Create client</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>address</th>
                <th>email</th>
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
  
export default ClientList;