import React from "react";
import "../Styles/home.scss";
import image from "../assets/bg1.jpg";
import image2 from "../assets/bgimage.jpg";
import image3 from "../assets/img2.jpg";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="home-page">
      <Carousel>
        <Carousel.Item>
          <img src={image} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
