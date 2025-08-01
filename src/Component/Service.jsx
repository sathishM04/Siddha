import React from "react";
import "../Styles/service.scss";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Service = ({ data }) => {
  return (
    <>
      <div id="service">
        <div className="section-title" data-aos="fade-up">
          <h3>Services</h3>
        </div>
        <div className="service-page">
          <div className="slider">
            {data.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p className="slider-name">
                  <span> {item.name}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btn-conteiner">
            <Button className="btn-content">
              <span className="btn-title">Know more</span>
              <span className="icon-arrow">
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
