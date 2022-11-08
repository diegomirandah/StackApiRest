import React, { useState, useEffect } from 'react';
import MesaDataService from '../../Services/mesa.service';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MesaTableRow from './MesaTableRow';

const MesaList = () => {
  const [mesa, setMesa] = useState([]);

  useEffect(() => {
    MesaDataService.getAll()
      .then(({ data }) => {
        setMesa(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return mesa.map((res, i) => {
      return <MesaTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className='table-wrapper'>
      <Row>
        <Col>
          <h2>Mesa list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={'/create-mesa/'}>
            <Button>Create mesa</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ambiente</th>
                <th>cant_mesa_reserva</th>
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

export default MesaList;
