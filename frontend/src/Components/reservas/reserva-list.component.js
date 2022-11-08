import React, { useState, useEffect } from 'react';
import ReservaDataService from '../../Services/reserva.service';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReservaTableRow from './ReservaTableRow';

const ReservaList = () => {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    ReservaDataService.getAll()
      .then(({ data }) => {
        setReserva(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return reserva.map((res, i) => {
      return <ReservaTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className='table-wrapper'>
      <Row>
        <Col>
          <h2>Reserva list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={'/create-Reserva/'}>
            <Button>Create reserva</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>fecha</th>
                <th>cant_persona</th>
                <th>disp</th>
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

export default ReservaList;
