// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
import CreateClient from "./Components/create-client.component";
import EditClient from "./Components/edit-client.component";
import ClientList from "./Components/client-list.component";
import ProductList from "./Components/product-list.component";
import CreateProduct from "./Components/create-product.component";
import EditProduct from "./Components/edit-product.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-client"} 
                  className="nav-link">
                  React App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                {/* <Nav>
                  <Link to={"/create-client"} 
                    className="nav-link">
                    Create Client
                  </Link>
                </Nav> */}
  
                <Nav>
                  <Link to={"/client-list"} 
                    className="nav-link">
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
                  <Link to={"/product-list"} 
                    className="nav-link">
                    Product List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={ClientList} />
                  <Route path="/create-client" component={CreateClient} />
                  <Route path="/edit-client/:id" component={EditClient} />
                  <Route path="/client-list" component={ClientList} />
                  <Route path="/product-list" component={ProductList} />
                  <Route path="/create-product" component={CreateProduct} />
                  <Route path="/edit-product/:id" component={EditProduct} />
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