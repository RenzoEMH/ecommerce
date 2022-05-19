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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
            src="https://res.cloudinary.com/vengui/image/upload/v1646869547/cld-sample.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
            src="https://res.cloudinary.com/vengui/image/upload/v1652930851/ecommerce/login-images/category-3_pumrkh.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselLogin;
