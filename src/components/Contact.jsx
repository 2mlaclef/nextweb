"use client";

import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    // Conteneur principal avec couleur de fond
    <Box
      sx={{
        minHeight: "100vh", // Occupe toute la hauteur de la page
        backgroundColor: "#f0f0f0", // Couleur de fond pour l'espace autour
        display: "flex", // Permet de centrer le formulaire
        justifyContent: "center", // Centre horizontalement
        alignItems: "center", // Centre verticalement
        padding: 3, // Ajoute un peu d'espace autour
      }}
    >
      {/* Conteneur du formulaire */}
      <Box
        sx={{
          maxWidth: 500, // Largeur maximale du formulaire
          width: "100%", // S'adapte aux petits écrans
          backgroundColor: "#f9f9f9", // Couleur de fond du formulaire
          borderRadius: 2, // Coins arrondis
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Ombre
          padding: 3, // Espacement interne
          textAlign: "center", // Centrer le contenu
        }}
      >
        {/* Titre */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold", // Texte en gras
            fontSize: { xs: "1.5rem", sm: "2rem" }, // Taille responsive
            marginBottom: 3, // Espacement sous le titre
          }}
        >
          Contacter moi
        </Typography>

        {/* Champ : Nom */}
        <TextField
          fullWidth
          label="Nom"
          variant="outlined"
          sx={{
            marginBottom: 2, // Espacement entre les champs
            backgroundColor: "#ffffff", // Fond blanc
            borderRadius: 1, // Coins arrondis
          }}
        />

        {/* Champ : Email */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{
            marginBottom: 2, // Espacement entre les champs
            backgroundColor: "#ffffff", // Fond blanc
            borderRadius: 1, // Coins arrondis
          }}
        />

        {/* Champ : Message */}
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4} // Plus de lignes pour le message
          sx={{
            marginBottom: 3, // Espacement avant le bouton
            backgroundColor: "#ffffff", // Fond blanc
            borderRadius: 1, // Coins arrondis
          }}
        />

        {/* Bouton : Envoyer */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff", // Bleu
            color: "#ffffff", // Texte blanc
            padding: "10px 20px",
            textTransform: "none", // Texte normal
            borderRadius: 1, // Coins arrondis
            transition: "background-color 0.3s ease, transform 0.3s ease", // Animation au survol
            "&:hover": {
              backgroundColor: "#0056b3", // Bleu plus foncé
              transform: "scale(1.05)", // Léger agrandissement au survol
            },
          }}
        >
          Envoyer Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
