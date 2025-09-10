import Container from "react-bootstrap/container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";


function MainNavBar() {
  return (
    <Navbar bg="light" expand="lg" className='bg-body-tertiary'>
      <Container>

        <Navbar.Brand href="home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link>
<Nav.Link><Link to = "/about-us"></Link> </Nav.Link>
<Nav.Link><Link to = "/carrer"></Link> </Nav.Link>
<Nav.Link>  </Nav.Link>

           </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavBar;