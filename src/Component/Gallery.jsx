import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gallerImage1 from "../assets/galleryImages/clinicImage.jpg";
import gallerImage2 from "../assets/galleryImages/clinicImage2.jpg";
import gallerImage3 from "../assets/galleryImages/clinicImage3.jpg";
import gallerImage4 from "../assets/galleryImages/clinicImage4.jpg";
import gallerImage5 from "../assets/galleryImages/clinicImage5.jpeg";
import gallerImage6 from "../assets/galleryImages/clinicImage6.jpeg";
import { Box, Container, Typography } from "@mui/material";
import "../Styles/gallery.scss";

const Gallery = () => {
  const location = useLocation();
  const gallery = useRef(null);

  useEffect(() => {
    if (location.hash === "#gallery" && gallery.current) {
      gallery.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  return (
    <div id="gallery" ref={gallery}>
      <Box className="section-title" data-aos="fade-up">
        <Typography className="section-header">Gallery</Typography>
      </Box>
      <Container>
        <Box sx={{}}>
          <img src={gallerImage1} alt="" />
        </Box>
      </Container>
    </div>
  );
};

export default Gallery;
