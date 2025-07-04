import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Reviews = ({ Title, Review, name, Year }) => {

    return (
        <>
            <Card className="h-100  shadow-sm">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col style={{ fontFamily: 'Satoshi ,sans-serif' }}>
                            <Card.Title> <h4 className="mb-3">{Title}</h4></Card.Title>
                            <Card.Text className="mb-3">{Review}</Card.Text>
                            <div className="mb-3" style={{ color: 'gold', fontSize: '20px' }}>
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} />
                                ))
                                }
                            </div>
                            <p className="mb-0 text-muted">~{name}({Year})</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Reviews
