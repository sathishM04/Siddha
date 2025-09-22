import * as React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Button,
  TextField,
  Paper,
  Container,
  Grid,
  Rating,
} from "@mui/material";
import "../Styles/review.scss";
import { useState, useEffect, useRef, useMemo } from "react";
import { Stack } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Min 3 characters"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Min rating is 1")
    .max(5, "Max rating is 5"),
});

const Review = () => {
  const [openReview, setOpenReview] = useState(false);
  const location = useLocation();
  const reviewRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [remarks, setRemarks] = useState("");

  // ✅ Fetch reviews in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(usersData);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Compute average rating
  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const validRatings = reviews
      .map((r) => Number(r.rating))
      .filter((val) => !isNaN(val));
    if (!validRatings.length) return 0;
    return validRatings.reduce((a, b) => a + b, 0) / validRatings.length;
  }, [reviews]);

  // ✅ Compute distribution counts
  const ratingCounts = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => {
      const rating = Math.round(Number(r.rating));
      if (counts[rating] !== undefined) {
        counts[rating] += 1;
      }
    });
    return counts;
  }, [reviews]);

  // ✅ Form setup
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      rating: 0,
    },
  });

  // ✅ Submit review
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "users"), {
        username: data.name,
        rating: data.rating,
        description: remarks,
        timestamp: serverTimestamp(),
      });
      reset();
      setRemarks("");
      setOpenReview(false);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  // ✅ Scroll into view when #review is in URL
  useEffect(() => {
    if (location.hash === "#review" && reviewRef.current) {
      window.scrollTo({
        top: reviewRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [location]);

  const handleClose = () => {
    setOpenReview(false);
    reset({ name: "", rating: 0 });
    setRemarks("");
  };

  return (
    <div id="review" ref={reviewRef}>
      <Box className="section-title" data-aos="fade-up">
        <Typography className="section-header">Review</Typography>
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
          <Grid container spacing={2} className="review-page">
            {/* Left Section: Summary + Form */}
            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              <Grid sx={{ display: "block" }}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  {/* Average + Write Button */}
                  <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ mr: 3, textAlign: "center" }}>
                      <Typography variant="h4" fontWeight="bold">
                        {averageRating.toFixed(1)}
                      </Typography>
                      <Rating
                        value={averageRating}
                        precision={0.5}
                        readOnly
                        size="medium"
                      />
                      <Typography variant="body2" color="text.secondary">
                        {reviews.length} reviews
                      </Typography>

                      <Button
                        variant="contained"
                        sx={{
                          fontSize: "10px",
                          marginTop: "25px",
                          marginBottom: "10px",
                          backgroundColor: "#93bb57",
                        }}
                        color="primary"
                        fullWidth
                        onClick={() => setOpenReview(true)}
                      >
                        Write a review
                      </Button>
                    </Box>
                  </Grid>

                  {/* Distribution */}
                  <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ flexGrow: 1 }}>
                      {[5, 4, 3, 2, 1].map((star) => (
                        <Box
                          key={star}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <Typography sx={{ width: 20 }}>{star}</Typography>
                          <LinearProgress
                            variant="determinate"
                            value={
                              reviews.length > 0
                                ? (ratingCounts[star] / reviews.length) * 100
                                : 0
                            }
                            sx={{
                              flexGrow: 1,
                              height: 10,
                              borderRadius: 5,
                              width: "280px",
                              backgroundColor: "#f0f0f0",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: "#00796b",
                              },
                            }}
                          />
                          <Typography sx={{ width: 30, textAlign: "right" }}>
                            {ratingCounts[star] || 0}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>

                {/* Form */}
                {openReview && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                      <hr />
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            label="Name"
                            placeholder="Enter your name"
                            variant="standard"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <Typography
                              component="legend"
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              Rating
                              <Box
                                component="span"
                                sx={{ color: "#747066", ml: 0.5 }}
                              >
                                *
                              </Box>
                            </Typography>
                            <Controller
                              name="rating"
                              control={control}
                              render={({ field }) => (
                                <Rating
                                  {...field}
                                  value={field.value || 0}
                                  precision={0.5}
                                  onChange={(_, value) => field.onChange(value)}
                                />
                              )}
                            />
                            <Typography color="error" variant="caption">
                              {errors.rating?.message}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>

                      <Stack spacing={2}>
                        <TextField
                          label="Remarks"
                          placeholder="Enter your comments"
                          multiline
                          variant="standard"
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                          sx={{ marginTop: "15px" }}
                        />
                      </Stack>
                    </Box>

                    <Grid
                      container
                      justifyContent="end"
                      gap="10px"
                      margin="10px"
                    >
                      <Grid item xs={6} sm={3}>
                        <Button
                          variant="outlined"
                          color="error"
                          sx={{ textTransform: "none" }}
                          startIcon={<CloseIcon />}
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#93bb57",
                            textTransform: "none",
                          }}
                          endIcon={<SendIcon />}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Grid>
            </Grid>

            {/* Right Section: Review List */}
            <Box sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
              {reviews
                .slice()
                .sort((a, b) => b.rating - a.rating)
                .map((review, index) => (
                  <Paper
                    key={index}
                    elevation={1}
                    sx={{ p: 2, mb: 2, borderRadius: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography fontWeight="bold">
                        <AccountCircleIcon
                          sx={{
                            fontSize: "25px",
                            marginTop: "-4px",
                            marginRight: "5px",
                          }}
                        />
                        {review.username}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="dateAndTime"
                        color="text.secondary"
                      >
                        {review.timestamp?.toDate
                          ? review.timestamp.toDate().toLocaleString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })
                          : "Just now"}
                      </Typography>
                    </Box>

                    <Rating
                      value={review.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {review.description}
                    </Typography>
                  </Paper>
                ))}
            </Box>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Review;
