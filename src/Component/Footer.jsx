import "../Styles/footer.scss";
import siddhaLogo from "../assets/siddhaLogo.png";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer-page">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ display: "flex" }} size={{ xs: 12, md: 5, lg: 4 }}>
            <Box className="navbar-brand">
              <img src={siddhaLogo} alt="Siddha Logo" height="40" />
            </Box>
            <Box sx={{ alignContent: "center" }}>
              <h4 className="logo-content">VOICE OF CHENDURAAN</h4>
              <p className="logo-treatment">AYURVEDIC TREATMENT</p>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, lg: 3 }}>
                <Box className="footer-header">ABOUT</Box>
                <Box sx={{ display: "grid" }}>
                  <Link className="footer-content" to="/#about">
                    About Us
                  </Link>
                  <Link className="footer-content" to="/#service">
                    Our Services
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, lg: 3 }}>
                <Box className="footer-header">QUICK LINKS</Box>
                <Box sx={{ display: "grid" }}>
                  <Link className="footer-content">Testimonials</Link>
                  <Link className="footer-content" to="/#review">
                    Review
                  </Link>
                  <Link className="footer-content" to="/#contact">
                    Contact
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 5 }}>
                <Box className="footer-header">CONTACT</Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <LocationOnIcon sx={{ fontSize: "20px", mt: "4px" }} />
                    <Typography
                      sx={{ pl: 1, mb: 1, fontSize: "14px", color: "#819291" }}
                    >
                      4/262 Kamarajar Statue opposite Near bus stand Mainroad
                      Kadayalurutti . H. O. Pandiapuram Surandai Near Tenkasi
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <LocalPhoneIcon sx={{ fontSize: "20px" }} />
                    <Typography
                      sx={{ pl: 1, mb: 1, fontSize: "14px", color: "#819291" }}
                    >
                      9486958501
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", fontSize: "15px" }}>
                    <EmailIcon sx={{ fontSize: "20px" }} />
                    <Typography
                      sx={{ pl: 1, mb: 1, fontSize: "14px", color: "#819291" }}
                    >
                      chenduranclinic@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            className="footer-copy"
            sx={{ display: "flex" }}
            size={{ xs: 12, md: 12, lg: 12 }}
          >
            <Grid>© 2024 Voice Of Chenduraan. All right reserved.</Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
