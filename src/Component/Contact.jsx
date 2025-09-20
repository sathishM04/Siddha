import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import "../Styles/contact.scss";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // connect yup validation
  });

  const location = useLocation();
  const contact = useRef(null);
  const [description, setDescription] = useState("");
  const formRef = useRef();

  useEffect(() => {
    if (location.hash === "#contact" && contact.current) {
      window.scrollTo({
        top: contact.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [location]);

  const handleClose = () => {
    setDescription("");
    reset({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      rating: 0,
    });
  };

  const onSubmit = (data) => {
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      description: description,
    };

    emailjs
      .send(
        "service_t4f4bqc",
        "template_ix1dyw9",
        templateParams,
        "mCeOqDzYTI6u6239b"
      )
      .then(
        (result) => {
          console.log("success...", result.text);
          alert("Message sent successfully!");
          handleClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div id="contact" ref={contact}>
      <Box className="section-title" data-aos="fade-up">
        <Typography className="section-header">Contact</Typography>
      </Box>
      <Container>
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 1,
            margin: "20px 0px",
          }}
        >
          <Grid container spacing={2} className="contact-page">
            {/* Location */}
            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Box sx={{ height: "50vh" }}>
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.088032652973!2d77.4312862!3d9.0261997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dc20a5d8f4ef%3A0x0!2zOeKwMDEnMzQuMyJOIDc3wrAyNicwMS45IkU!5e0!3m2!1sen!2sin!4v1695473633220!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Grid>

            {/* Personal info */}
            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{
                p: 2,
              }}
            >
              <Box>
                <Typography variant="h6" gutterBottom>
                  Personal Info
                </Typography>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                  <Grid container sx={{ display: "flex", margin: "20px" }}>
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                      sx={{ padding: "5px" }}
                    >
                      <TextField
                        required
                        label="First Name"
                        placeholder="Enter your first name"
                        variant="standard"
                        fullWidth
                        {...register("firstName")}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z]/g,
                            ""
                          );
                        }}
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                      sx={{ padding: "5px" }}
                    >
                      <TextField
                        required
                        label="Last Name"
                        className="name-field"
                        placeholder="Enter your last name"
                        variant="standard"
                        fullWidth
                        {...register("lastName")}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z]/g,
                            ""
                          ); // keep only letters
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ display: "flex", margin: "20px" }}>
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                      sx={{ padding: "5px" }}
                    >
                      <TextField
                        required
                        label="Phone Number"
                        placeholder="Enter phone number"
                        variant="standard"
                        fullWidth
                        {...register("phone")}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                      sx={{ padding: "5px" }}
                    >
                      <TextField
                        required
                        label="Email"
                        className="email-field"
                        placeholder="Enter email"
                        variant="standard"
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        onInput={(e) => {
                          // Allow only letters, numbers, @, dot, underscore, dash
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z0-9@._-]/g,
                            ""
                          );
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    <TextField
                      id="standard-textarea"
                      label="Description"
                      placeholder="Enter your comments"
                      multiline
                      variant="standard"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Stack>
                  <Grid
                    container
                    justifyContent={"end"}
                    gap={"10px"}
                    margin={"10px"}
                  >
                    <Grid size={{ xs: 5, sm: 2.5, md: 2.5, lg: 2.5 }}>
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<CloseIcon />}
                        onClick={() => handleClose()}
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid size={{ xs: 5, sm: 2.5, md: 2.5, lg: 2.5 }}>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#93bb57" }}
                        endIcon={<SendIcon />}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
