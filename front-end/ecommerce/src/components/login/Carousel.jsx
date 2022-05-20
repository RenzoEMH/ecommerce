import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselLogin = () => {
  return (
    <div>
      <Carousel className="container">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
            src="https://res.cloudinary.com/vengui/image/upload/v1652926808/ecommerce/login-images/about_us_vkdjeq.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
            src="https://res.cloudinary.com/vengui/image/upload/v1646869547/cld-sample.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
            src="https://res.cloudinary.com/vengui/image/upload/v1652930851/ecommerce/login-images/category-3_pumrkh.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselLogin;
