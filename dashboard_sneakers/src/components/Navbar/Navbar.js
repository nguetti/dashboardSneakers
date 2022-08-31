import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar.Brand style={{color: 'white'}} href="#home">
        <img
              src="/img/LogoBlanco.png"
              width="140"
              height="25"
              
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{color: 'white'}} id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{color: 'white'}} href="#">Dashboard</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#">Productos</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#">Marcas</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#">Usuarios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
