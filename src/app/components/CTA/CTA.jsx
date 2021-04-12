import React from "react";
import {Jumbotron, Button} from "react-bootstrap";


const CTA = () => {
  return (
    <Jumbotron className="cta-block">
      <h1>50% SALE</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button size="lg" variant="secondary">Order Now</Button>
      </p>
    </Jumbotron>
  );
};

export default CTA;
