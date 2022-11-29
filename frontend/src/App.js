// Import React
import React, { Component } from "react"; // import el Component

// Import Bootstrap
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { Switch, Route, Link } from "react-router-dom";

// Import other React Component
import AuthService from "./Services/auth.service";
import Home from "./Components/home.component";
import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Profile from "./Components/profile.component";
import BoardUser  from "./Components/board-user.component";
import BoardModerator   from "./Components/board-moderator.component";
import BoardAdmin   from "./Components/board-admin.component";



import CreateClient from "./Components/create-client.component";
import EditClient from "./Components/edit-client.component";
import ClientList from "./Components/client-list.component";
import ProductList from "./Components/product-list.component";
import CreateProduct from "./Components/create-product.component";
import EditProduct from "./Components/edit-product.component";
//import Graph from "./Components/graph.component";


// App Component
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
//const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/home"} 
                  className="nav-link">
                  React App
                </Link>
              </Navbar.Brand>
              <div className="navbar-nav mr-auto">
                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">
                      Moderator Board
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/client-list"} className="nav-link">
                      Clients
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/product-list"} className="nav-link">
                      Products
                    </Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
              </div>
              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </Container>
          </nav>
          {/* <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-client"} 
                  className="nav-link">
                  React App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/client-list"} 
                    className="nav-link">
                    Client List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/product-list"} 
                    className="nav-link">
                    Product List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar> */}
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />
                <Route path="/create-client" component={CreateClient} />
                <Route path="/edit-client/:id" component={EditClient} />
                <Route path="/client-list" component={ClientList} />
                <Route path="/product-list" component={ProductList} />
                <Route path="/create-product" component={CreateProduct} />
                <Route path="/edit-product/:id" component={EditProduct} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
//};
  }
}

  
export default App;