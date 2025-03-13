"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: {
          xs: "50vh",
          sm: "60vh",
          md: "70vh",
          lg: "85vh",
        },
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        padding: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
          },
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        Mon Portfolio
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "2rem",
          },
          marginBottom: 3,
        }}
      >
        Découvrez mes projets
      </Typography>
    </Box>
  );
};

export default Banner;
