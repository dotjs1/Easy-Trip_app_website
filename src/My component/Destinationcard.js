import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
function DestinationCard({ image, title, onClick, pricing, hotels }) {
  return (
    <Card className="h-100 shadow-sm" onClick={() => onClick(image)} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={image} style={{height:'45vh'}}  />
      <Card.Body>
        <Row className="align-items-center">
          <Col md={6} className="px-4">
            <Card.Title className="mb-2">{title}</Card.Title>
            <p className="mb-1 text-muted">{pricing}</p>
            <p className="mb-0 text-muted">{hotels}</p>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-md-end justify-content-center px-4">
            <p className="mb-2 text-success fw-semibold"><FontAwesomeIcon icon={faTag} /> Partner Discount</p>
            <button className="btn btn-dark rounded-pill px-4">Explore</button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;