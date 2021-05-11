import React from "react";
import { Carousel} from "react-bootstrap";

const Slide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
          alt="First slide"
        />
        {/* <Button href="#promo" className="btn-carousel" variant="outline-dark">
          Sales 50%
        </Button> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1490126296131-3de6bd234be6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          alt="Second slide"
        />
        {/* <Button href="#promo" className="btn-carousel" variant="outline-dark">
          See All
        </Button> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1500195186100-dbd3e6f3251b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Third slide"
        />
        {/* <Button href="#promo" className="btn-carousel" variant="outline-dark">
          Click here
        </Button> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
