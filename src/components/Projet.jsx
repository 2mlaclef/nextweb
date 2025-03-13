"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description brève du projet 1.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description brève du projet 2.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description brève du projet 3.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
  {
    id: 4,
    title: "Projet 4",
    description: "Description brève du projet 4.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
  {
    id: 5,
    title: "Projet 5",
    description: "Description brève du projet 5.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
  {
    id: 6,
    title: "Projet 6",
    description: "Description brève du projet 6.",
    image: "/image.jpg", // Remplacez par le chemin de l'image
  },
];

const Projet = () => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#f0f0f0", // Fond gris clair pour la section
        textAlign: "center",
      }}
    >
      {/* Titre principal de la section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold", // Texte en gras
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Taille responsive
          marginBottom: 10, // Espacement sous le titre
          marginTop: 5, // Espacement sous le titre
        }}
      >
        Mes projets
      </Typography>

      {/* Conteneur des cartes de projet */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid
            item
            xs={12} // 1 colonne sur très petits écrans
            sm={6} // 2 colonnes sur petits écrans
            md={4} // 3 colonnes sur écrans moyens et grands
            key={project.id}
            sx={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation au survol
              "&:hover": {
                transform: "translateY(-10px)", // Déplacement vers le haut au survol
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)", // Ombre ajoutée au survol
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f0f0f0", // Fond des cartes
                borderRadius: 2, // Coins arrondis
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)", // Ombre par défaut
                overflow: "hidden", // Évite que le contenu dépasse
              }}
            >
              {/* Image du projet */}
              <Box
                component="img"
                src={project.image} // Chemin de l'image
                alt={project.title} // Texte alternatif
                sx={{
                  width: "100%", // L'image remplit la largeur de la carte
                  height: 200, // Hauteur fixe pour les images
                  objectFit: "cover", // Ajuste l'image pour qu'elle couvre l'espace
                }}
              />

              {/* Contenu de la carte */}
              <Box
                sx={{
                  padding: 2, // Espacement interne
                  textAlign: "left", // Texte aligné à gauche
                }}
              >
                {/* Titre du projet */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold", // Texte en gras
                    fontSize: { xs: "1rem", sm: "1.2rem" }, // Taille responsive
                    marginBottom: 1, // Espacement sous le titre
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description du projet */}
                <Typography
                  sx={{
                    color: "#000", // Texte gris
                    fontSize: { xs: "0.9rem", sm: "1rem" }, // Taille responsive
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projet;
