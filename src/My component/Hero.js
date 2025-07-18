import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
function Hero() {
  return (
    <Container fluid className="py-5 hero-section">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start px-5 mb-4 mb-md-0" data-aos="zoom-in">
          <h1 className="fw-bold text-uppercase">
            Join Our <br /> Community
          </h1>
          <p>
            Become a user of our mobile app and make your travels more enjoyable and amazing.
          </p>
          <button className="btn btn-dark">Download App</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

