import * as React from "react";
import {
  Button,
  Stack,
  Grid,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Typography,
} from "@mui/material";
import "../Styles/appoinment.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed"),
  dob: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  address: yup.string().required("Address is required"),
  firstVisit: yup.string().required("Please select Yes or No"),
  // visitCount: yup.string().when("firstVisit", {
  //   is: "No",
  //   then: yup.string().required("Follow up visit is required"),
  // }),
  visitCount: yup.string().when("firstVisit", {
    is: (val) => val === "Yes", // 👈 required only when firstVisit === "Yes"
    then: (schema) => schema.required("Follow up visit is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  procedure: yup.string().required("Procedure is required"),
  signsOfSymptoms: yup.string().required("Signs of symptoms is required"),
  Sympotoms: yup.string().required("Sympotoms period is required"),
  appointmentDateTime: yup
    .date()
    .required("Appointment date & time is required"),
});

const AppoinmentBooking = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("inn");
    return;
    console.log("Form Data:", data);
    const appoinmentTemplateParams = {
      fullName: data.fullName,
      dob: data.dob,
      gender: data.gender,
      phone: data.phone,
      email: data.email,
      address: address,
      procedure: procedure,
    };
    emailjs
      .send(
        "service_af9nx6k",
        "template_7v6x3qk",
        appoinmentTemplateParams,
        "mCeOqDzYTI6u6239b"
      )
      .then(
        (result) => {
          console.log("success...", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Try again.");
        }
      );
    setOpen(false);
    reset();
  };

  const firstVisitValue = watch("firstVisit");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        maxWidth="md"
        id="appoinmentBooking"
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Consultation / Treatment Appointment Request Form
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
              {/* Full Name */}
              <Grid
                size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  {...register("fullName")}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                  }}
                />
              </Grid>

              {/* Date of Birth */}
              <Grid
                size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
                sx={{ padding: "5px" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="dob"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        label="Date of Birth"
                        inputFormat="DD/MM/YYYY"
                        value={field.value || null}
                        onChange={(date) => field.onChange(date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            fullWidth
                            error={!!errors.dob}
                            helperText={errors.dob?.message}
                          />
                        )}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Gender */}
              <Grid
                size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  select
                  label="Gender"
                  variant="standard"
                  fullWidth
                  defaultValue=""
                  {...register("gender")}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
              {/* Phone */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  label="Contact Number"
                  variant="standard"
                  fullWidth
                  {...register("phone")}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </Grid>

              {/* Email */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  label="Email"
                  variant="standard"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
              {/* Address */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  label="Address"
                  variant="standard"
                  fullWidth
                  row={2}
                  {...register("address")}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>

              <Grid container spacing={2} sx={{ padding: "5px" }}>
                {/* First Time Visit */}
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" error={!!errors.firstVisit}>
                    <FormLabel component="legend">First time visit</FormLabel>
                    <Controller
                      name="firstVisit"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup row {...field}>
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      )}
                    />
                    <Typography variant="caption" color="error">
                      {errors.firstVisit?.message}
                    </Typography>
                  </FormControl>
                </Grid>
                {/* Follow Up Visit — only show if "yes" */}
                {firstVisitValue === "Yes" && (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Follow Up Visit"
                      variant="standard"
                      fullWidth
                      {...register("visitCount")}
                      helperText={errors.visitCount?.message}
                      error={!!errors.visitCount}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
              {/* Procedure */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  select
                  label="Which procedure do you want?"
                  variant="standard"
                  fullWidth
                  defaultValue=""
                  {...register("procedure")}
                  error={!!errors.procedure}
                  helperText={errors.procedure?.message}
                >
                  <MenuItem value="Indian Medicine">Indian Medicine</MenuItem>
                  <MenuItem value="Varma Theraphy">Varma Theraphy</MenuItem>
                  <MenuItem value="Auricular Theraphy">
                    Auricular Theraphy
                  </MenuItem>
                  <MenuItem value="Cupping Theraphy">Cupping Theraphy</MenuItem>
                  <MenuItem value="Magnatic Theraphy">
                    Magnatic Theraphy
                  </MenuItem>
                  <MenuItem value="Foot Reflexology">Foot Reflexology</MenuItem>
                  <MenuItem value="Seed Theraphy">Seed Theraphy</MenuItem>
                  <MenuItem value="Accupressure Theraphy">
                    Accupressure Theraphy
                  </MenuItem>
                  <MenuItem value="Hypno Theraphy">Hypno Theraphy</MenuItem>
                  <MenuItem Neuro Theraphy="Other">
                    Neuro Theraphy
                  </MenuItem>
                  <MenuItem value="Chiro Theraphy">Chiro Theraphy</MenuItem>
                  <MenuItem value="Medicated Oil Masssage">
                    Medicated Oil Masssage
                  </MenuItem>
                  <MenuItem value="Yoga Theraphy">Yoga Theraphy</MenuItem>
                  <MenuItem value="Mudra Theraphy">Mudra Theraphy</MenuItem>
                </TextField>
              </Grid>

              {/* Signs of symptoms */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px" }}
              >
                <TextField
                  label="Signs of symptoms"
                  variant="standard"
                  fullWidth
                  {...register("signsOfSymptoms")}
                  error={!!errors.signsOfSymptoms}
                  helperText={errors.signsOfSymptoms?.message}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: "5px" }}>
              {/* Symptoms Period */}
              {/* <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px", marginTop: "8px" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="symptomsperiod "
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        label="Symptoms Period "
                        inputFormat="DD/MM/YYYY"
                        value={field.value || null}
                        onChange={(date) => field.onChange(date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            fullWidth
                            error={!!errors.dob}
                            helperText={errors.dob?.message}
                          />
                        )}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid> */}
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px", marginTop: "8px" }}
              >
                <TextField
                  label="Sympotoms Period"
                  variant="standard"
                  fullWidth
                  {...register("Sympotoms")}
                  error={!!errors.Sympotoms}
                  helperText={errors.Sympotoms?.message}
                />
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
                sx={{ padding: "5px", marginTop: "8px" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="appointmentDateTime"
                    control={control}
                    render={({ field }) => (
                      <DateTimePicker
                        label="Appointment Date & Time"
                        value={field.value || null}
                        onChange={(newValue) => field.onChange(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            fullWidth
                            error={!!errors.appointmentDateTime}
                            helperText={errors.appointmentDateTime?.message}
                          />
                        )}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AppoinmentBooking;
