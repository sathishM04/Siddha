import React from "react";
import siddhaLogo from "../assets/siddhaLogo.png";
import "../Styles/nav.scss";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="#">
            <img src={siddhaLogo} alt="Siddha Logo" height="40" />
          </a>
          <div className="d-block">
            <h4 className="logo-content">VOICE OF CHENDURAAN</h4>
            <p className="logo-treatment">AYURVEDIC TREATMENT</p>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DETAILS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                REVIEW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
