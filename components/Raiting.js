import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({ rating, setRating }) {
  return (
    <Stack spacing={1}>
      <Rating
        className="text-4xl"
        name="half-rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        precision={0.5}
      />
    </Stack>
  );
}
