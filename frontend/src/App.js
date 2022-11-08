// Import React
import React from 'react';

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Import Custom CSS
import './App.css';

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import other React Component


import CreateCliente from './Components/clientes/create-cliente.component';
import ClienteList from './Components/clientes/cliente-list.component';
import EditCliente from './Components/clientes/edit-cliente.component';

import CreateRestaurante from './Components/restaurantes/create-restaurante.component';
import RestauranteList from './Components/restaurantes/restaurante-list.component';
import EditRestaurante from './Components/restaurantes/edit-restaurante.component';

import CreateAdmin from './Components/admin/create-admin.component';

import CreateReserva from './Components/reservas/create-reserva.component';

import CreateMesa from './Components/mesas/create-mesa.component';
// App Component
const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-client'} className='nav-link'>
                  React App
                </Link>
              </Navbar.Brand>

              <Nav className='justify-content-end'>
                {/* <Nav>
                  <Link to={"/create-client"} 
                    className="nav-link">
                    Create Client
                  </Link>
                </Nav> */}

                <Nav>
                  <Link to={'/cliente-list'} className='nav-link'>
                    Client List
                  </Link>
                </Nav>

                {/* <Nav>
                  <Link to={"/create-product"} 
                    className="nav-link">
                    Create Product
                  </Link>
                </Nav> */}
                <Nav>
                  <Link to={'/create-clientes'} className='nav-link'>
                    Create Cliente
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-restaurantes'} className='nav-link'>
                    Create restaurante
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/restaurante-list'} className='nav-link'>
                    lista de restaurantes
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-admin'} className='nav-link'>
                    crear admin
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-reserva'} className='nav-link'>
                    crear reserva
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-mesa'} className='nav-link'>
                    crear mesa
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={ClienteList} />


                  <Route path='/create-clientes' component={CreateCliente} />
                  <Route path='/cliente-list' component={ClienteList} />
                  <Route path='/edit-cliente/:id' component={EditCliente} />

                  <Route path='/create-restaurantes' component={CreateRestaurante} />
                  <Route path='/restaurante-list' component={RestauranteList} />
                  <Route path='/edit-restaurante/:id' component={EditRestaurante} />

                  <Route path='/create-admin' component={CreateAdmin} />

                  <Route path='/create-reserva' component={CreateReserva} />

                  <Route path='/create-mesa' component={CreateMesa} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
