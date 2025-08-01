import React from "react";
import "../Styles/home.scss";
import image2 from "../assets/caroselImage/bgimage.jpg";
import Carousel from "react-bootstrap/Carousel";
import carosal2 from "../assets/caroselImage/carosalimg2.png";
import oilImage from "../assets/caroselImage/ayurveda-banner-1.jpg";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-page">
      <Carousel>
        <Carousel.Item>
          <img src={carosal2} alt="" />
          <Carousel.Caption className="carosal-image">
            <h3>UNIVERCEL INTEGRATED THERAPY CENTER</h3>
            <p>
              Experience time-tested Indian therapies including Varma, Cupping,
              and Auricular therapy .
            </p>
            <Button className="book-appoinment">
              Book Appoinment{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="" />
          <Carousel.Caption className="carosal-image">
            <h3>Neuro & Pain Management Therapy</h3>
            <p>
              Neuro Therapy, Chiro Therapy, and Reflexology bring fast and
              lasting relief.
            </p>
            <Button className="book-appoinment">
              Book Appoinment{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={oilImage} alt="" />
          <Carousel.Caption className="carosal-content">
            <h3>Mind-Body Wellness Programs</h3>
            <p>
              Medicated oil massage that relieves pain, improves circulation,
              and deeply rejuvenates the body.
            </p>
            <Button className="book-appoinment">
              Book Appoinment{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
