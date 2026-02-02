import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function AppNavbar() {
  return (
    <Navbar fixed="top" expand="lg" className="navbar-main">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          Love<span>Proposals</span> 💖
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-links">
            <NavLink to="/" end className="nav-item">
              Home
            </NavLink>

            <NavLink to="/proposal" className="nav-item">
               proposal
            </NavLink>

            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
