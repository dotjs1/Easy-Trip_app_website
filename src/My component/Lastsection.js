 import React from 'react'
 import { Container, Row, Col } from 'react-bootstrap';
 const Lastsection = () => {
   return (
<Container fluid className="py-5 lastsection">
  <Row className="align-items-center" style={{ display: 'flex', justifyContent: 'space-between', fontFamily:' Satoshi ,sans-serif' }}>
    <Col md={6}lg={4} className="text-center text-md-start px-4 mb-4 mb-md-0">
      <h1 className="fw-bold">Why Travelers <br />Choose Us</h1>
    </Col>
    <Col md={6}lg={4} className="text-center text-md-start px-4">
      <h2>Top-Rated <br />Mobile Travel <br />App of 2025</h2>
      <p className="fst-italic">Recognized in the Global <br />Tour App Rankings 2025</p>
    </Col>
  </Row>
</Container>
   )
 }
 
 export default Lastsection
 