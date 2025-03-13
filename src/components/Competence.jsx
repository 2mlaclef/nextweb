"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "BOOTSTRAPP" },
  { id: 4, name: "TAILWIND CSS" },
  { id: 5, name: "JAVASCRIPT" },
  { id: 6, name: "REACT JS" },
];

const Competence = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Titre */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
          marginBottom: 10,
          marginTop: 7,
        }}
      >
        Mes compétences
      </Typography>

      {/* Liste des compétences */}
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={skill.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 500,
                height: 150,
                backgroundColor: "#f0f0f0",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Competence;
