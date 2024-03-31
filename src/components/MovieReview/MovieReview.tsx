import React, { useState } from "react";
import { Typography, TextField, Button, Alert } from "@mui/material";
import { Movie } from "../../types";
import { postReview } from "../../API/postReview";
import "./MovieReview.css";

export const MovieReview: React.FC<{ selectedMovie: Movie }> = ({
  selectedMovie,
}) => {
  const [review, setReview] = useState("");
  const [sucessReview, setSucessReview] = useState(false);
  const [error, setError] = useState(false);
  const MAX_CHARACTERS = 100;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (review.length > MAX_CHARACTERS) {
      setError(true);
      return;
    }
    try {
      await postReview("movieId", review);
      setReview("");
      setError(false);
      setSucessReview(true);
    } catch (error) {
      setError(true);
    }
    console.log("Review submitted:", review);
    setReview("");
    setError(false);
  };

  return (
    <>
      {selectedMovie && (
        <div className="MovieReviewContainer">
          <Typography variant="h6">
            Submit a Review for {selectedMovie.title}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              multiline
              minRows={3}
              label="Review"
              variant="outlined"
              fullWidth
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
                if (e.target.value.length > MAX_CHARACTERS) {
                  setError(true);
                } else {
                  setError(false);
                }
              }}
              error={error}
              helperText={
                error ? `Maximum ${MAX_CHARACTERS} characters allowed` : ""
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
          {sucessReview === true && (
            <Alert
              onClose={() => setSucessReview(false)}
              severity="success"
              sx={{ mt: 2 }}
            >
              Review submitted successfully!
            </Alert>
          )}
        </div>
      )}
    </>
  );
};
