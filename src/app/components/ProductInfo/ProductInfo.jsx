import React, {useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Carousel} from "react-bootstrap";
import Reviews from "../Reviews/Reviews";
import { useSelector } from "react-redux";



const ProductInfo = () => {
  
  const dataProduct = useSelector((state) => state.productState);

  console.log(dataProduct)


  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dataProduct.product.image}
          alt={dataProduct.product.title}
        />
      </Carousel.Item>
    </Carousel>
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
           {dataProduct.product.title}
            </Card.Header>
            <Card.Body>
              <Card.Title>{dataProduct.product.title}</Card.Title>
              <Card.Text>
              {dataProduct.product.subtitle}
              </Card.Text>
              <Button variant="secondary">Add to Cart for  {dataProduct.product.price}</Button>
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
