"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Liste des pages et leurs liens href correspondants
const pages = [
  { name: "Accueil", href: "/" }, // Redirige vers la section Accueil
  { name: "Projets", href: "/projet#projet" }, // Redirige vers la section Projets
  { name: "Contact", href: "/contact#contact" }, // Redirige vers la section Contact
];


// Définir un thème avec une couleur de fond ajustée
const theme = createTheme({
  palette: {
    primary: {
      main: "#f0f0f0", // Couleur de fond légèrement grisée
    },
    text: {
      primary: "#000000", // Texte noir
    },
  },
});

function Navbare() {
  // Détection des écrans très petits
  const isVerySmallScreen = useMediaQuery("(max-width:400px)");

  return (
    <ThemeProvider theme={theme}>
      <AppBar
  position="fixed" // Fixe la barre en haut de l'écran
  color="primary"
  elevation={1}
  style={{ borderBottom: "1px solid #ccc" }}
>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: isVerySmallScreen ? "center" : "space-between",
              alignItems: "center", // Centrer verticalement tous les éléments
              flexDirection: isVerySmallScreen ? "column" : "row", // S'empile sur les petits écrans
              padding: "8px", // Ajout d'espacement pour éviter les coupures
            }}
          >
            {/* Nom Oumar SAGNA centré et avec effet au survol */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "none",
                textAlign: "center",
                fontSize: isVerySmallScreen ? "1.2rem" : "30px", // Taille ajustée pour les petits écrans
                wordBreak: "break-word", // Gérer les mots longs pour les petits écrans
                transition: "color 0.3s ease, transform 0.3s ease", // Animation fluide
                "&:hover": {
                  color: "#0000ff", // Couleur bleue au survol
                  transform: isVerySmallScreen ? "none" : "scale(1.1)", // Animation sur grand écran uniquement
                },
              }}
            >
              Oumar SAGNA
            </Typography>

            {/* Liens alignés à droite ou centrés sur petits écrans */}
            <Box
              sx={{
                display: "flex",
                justifyContent: isVerySmallScreen ? "center" : "flex-end",
                flexWrap: isVerySmallScreen ? "wrap" : "nowrap", // Réorganise les liens sur très petits écrans
                gap: 2, // Espacement uniforme entre les liens
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={page.href}
                  sx={{
                    color: "black", // Texte noir
                    textTransform: "none", // Garde le texte normal
                    fontWeight: "bold",
                    fontSize: isVerySmallScreen ? "1rem" : "1.2rem", // Taille des liens ajustée
                    "&:hover": {
                      color: "#0000ff", // Couleur bleue au survol
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbare;
