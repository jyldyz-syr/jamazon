import React from "react";
import { Tab, Row, Col, Nav, Jumbotron, Button } from "react-bootstrap";

const Reviews = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="review" eventKey="first">Review by Sarah</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="review" eventKey="second">Review by Jake</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Jumbotron>
                <h1>Sarah</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Jumbotron>
                <h1>Jake</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Reviews;
