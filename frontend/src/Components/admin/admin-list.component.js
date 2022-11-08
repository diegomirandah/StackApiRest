import React, { useState, useEffect } from "react";
import AdminDataService from "../../Services/admin.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminTableRow from "./AdminTableRow";
  
const AdminList = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    AdminDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <AdminTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Row>
        <Col>
          <h2>Admin list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-admins"}>
            <Button>Create admin</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>rut</th>
                <th>password</th>
                <th>num_local</th>
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
  
export default AdminList;