import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import ServiceImages from "./ServiceImages";
import Review from "./Review";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
// import Gallery from "./Gallery";

const NavLink = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);
  return (
    <div>
      <Home />
      <About />
      <ServiceImages />
      {/* <Gallery /> */}
      <Review />
      <Contact />
    </div>
  );
};

export default NavLink;
