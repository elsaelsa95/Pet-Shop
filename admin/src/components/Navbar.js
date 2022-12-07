import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarAdmin() {
  const logout = () => {
    localStorage.setItem("access_token", "");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/appointment">Appointment</Nav.Link>
          </Nav>
          <Nav className="me-end">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/" onClick={() => logout()}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAdmin;
