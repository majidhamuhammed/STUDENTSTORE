import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Navbar variant="dark" style={{ minHeight: '100px',backgroundColor:'purple', height:'25vh' }}>
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Logo - Left */}
          <Col xs={3} className="d-flex justify-content-start">
            <Navbar.Brand as={Link} to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LQvxNHdkdv2rhHedPAkRQjIfiZb8l8Fk8A&s"
                alt="logo"
                width="80"
                height="80"
                className="rounded-circle"
              />
            </Navbar.Brand>
          </Col>

          {/* Title - Center */}
          <Col xs={6} className="text-center">
            <h2 className="text-white fw-bold mb-0">STUDENT SPOT</h2>
          </Col>

          {/* Add Student Button - Right */}
          <Col xs={3} className="d-flex justify-content-end">
            <Link to="/add">
              <button className="btn btn-light border border-3 border-dark shadow-sm">ADD STUDENT +</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
