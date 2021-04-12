import React from "react";
import {Card, Button } from "react-bootstrap";

const Modal = () => {
  return (
    <Card className="text-center pb-5">
      <Card.Header>Sign Up Today</Card.Header>
      <Card.Body className="sales-card d-block w-100">
        <Card.Title >Special title treatment - Get 20% off</Card.Title>
        <Card.Text text="info">
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="secondary">Sign Up</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> Valid until 1st August, 2021</Card.Footer>
    </Card>
  );
};

export default Modal;
