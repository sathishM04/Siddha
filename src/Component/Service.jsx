import React, { useEffect, useRef } from "react";
import "../Styles/service.scss";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const Service = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const about = useRef(null);

  const routeServiceContent = () => {
    navigate("/service-content");
  };

  useEffect(() => {
    if (location.hash === "#service" && about.current) {
      // about.current.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: about.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div id="service" ref={about}>
      <div className="section-title" data-aos="fade-up">
        <h3>Services</h3>
      </div>

      <div className="service-page">
        <div className="slider">
          <div className="group">
            {data.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p className="slider-name">
                  <span>{item.name}</span>
                </p>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {data.map((item) => (
              <div className="item" key={`${item.id}-clone`}>
                <img src={item.image} alt={item.name} />
                <p className="slider-name">
                  <span>{item.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="btn-conteiner">
          <Button className="btn-content" onClick={routeServiceContent}>
            <span className="btn-title">Know more</span>
            <span className="icon-arrow">
              <FontAwesomeIcon icon={faArrowRightLong} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
