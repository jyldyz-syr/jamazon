import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";
import Reviews from "../Reviews/Reviews";

const ProductInfo = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col>
          <Carousel />
        </Col>
        <Col>
          <Card
            border="light"
            style={{
              width: "30rem",
              marginTop: "3%"
            }}
          >
            <Card.Header className="d-flex justify-content-center" style={{backgroundColor: "transparent"}}>
              Book Title
            </Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Card border="light" style={{ width: "100rem", marginBottom: "2%" }}>
          <Card.Header className="d-flex justify-content-center">
            Testimonials
          </Card.Header>
        </Card>
      </Row>
      <Row>
        <Reviews />
      </Row>
    </Container>
  );
};

export default ProductInfo;
