import React from "react";
import { Card } from "react-bootstrap";

const Title = () => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-center pt-5 pb-5"> Title of the Category</Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Title;
