import React, { useEffect, useState } from "react";
import siddhaLogo from "../assets/siddhaLogo.png";
import "../Styles/nav.scss";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Icon } from "@iconify/react";
import AppoinmentBooking from "./AppoinmentBooking";

const Nav = () => {
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePageTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleApoinmentBooking = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Inital navbar */}
      <div id="intial-navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex">
              <Link className="navbar-brand" aria-current="page" to="/#home">
                <img src={siddhaLogo} alt="Siddha Logo" height="40" />
              </Link>
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
                  <Link className="nav-link" aria-current="page" to="/#about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#service">
                    SERVICES
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/#gallery">
                    GALLERY
                  </Link>
                </li> */}
                {/* 
                <li className="nav-item">
                  <Link className="nav-link" href="/#">
                    DETAILS
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/#review">
                    REVIEW
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {showButton && (
          <>
            <KeyboardArrowUpIcon
              className="icon-arrow"
              onClick={handlePageTop}
            />
            <Icon
              icon="fluent:chat-add-16-regular"
              onClick={handleApoinmentBooking}
              className="icon-booking"
            />
          </>
        )}
      </div>
      {open && <AppoinmentBooking open={open} setOpen={setOpen} />}
    </>
  );
};

export default Nav;
