"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a", // Couleur de fond sombre
        color: "#ffffff", // Texte en blanc
        padding: 3, // Espacement interne
        textAlign: "center", // Centrer le contenu
      }}
    >
      {/* Texte du footer */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem" }, // Texte responsive
          marginBottom: 2, // Espacement sous le texte
        }}
      >
        © 2024 Oumar Sagna Tous les droits sont réservés.
      </Typography>

      {/* Conteneur des icônes */}
      <Box>
        {/* Icône Twitter */}
        <IconButton
          sx={{
            color: "#1DA1F2", // Couleur Twitter
            transition: "transform 0.3s ease, color 0.3s ease", // Animation au survol
            "&:hover": {
              transform: "scale(1.2)", // Agrandir l'icône
              color: "#0d8cdc", // Couleur légèrement plus foncée
            },
          }}
          aria-label="Twitter"
          href="https://twitter.com" // Remplacez par votre lien Twitter
          target="_blank" // Ouvre le lien dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité pour les liens externes
        >
          <Twitter />
        </IconButton>

        {/* Icône LinkedIn */}
        <IconButton
          sx={{
            color: "#0077b5", // Couleur LinkedIn
            transition: "transform 0.3s ease, color 0.3s ease", // Animation au survol
            "&:hover": {
              transform: "scale(1.2)", // Agrandir l'icône
              color: "#005983", // Couleur légèrement plus foncée
            },
          }}
          aria-label="LinkedIn"
          href="https://linkedin.com" // Remplacez par votre lien LinkedIn
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>

        {/* Icône GitHub */}
        <IconButton
          sx={{
            color: "#ffffff", // Couleur GitHub (blanc)
            transition: "transform 0.3s ease, color 0.3s ease", // Animation au survol
            "&:hover": {
              transform: "scale(1.2)", // Agrandir l'icône
              color: "#cccccc", // Couleur plus claire au survol
            },
          }}
          aria-label="GitHub"
          href="https://github.com" // Remplacez par votre lien GitHub
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
