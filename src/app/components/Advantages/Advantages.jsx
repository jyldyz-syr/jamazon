import React from "react";
import { Card } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

const Advantages = () => {
  return (
    <div className="d-flex justify-content-between pt-5 pb-5">
      <Card style={{ width: "22rem" }}>
        <Card.Body className="d-flex align-content-center flex-wrap">
          <Cart4 className="mr-4 mb-2" size={30} />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "22rem" }}>
        <Card.Body className="d-flex align-content-center flex-wrap">
          <Cart4 className="mr-4 mb-2" size={30} />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "22rem" }}>
        <Card.Body className="d-flex align-content-center flex-wrap">
          <Cart4 className="mr-4 mb-2" size={30} />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Advantages;
