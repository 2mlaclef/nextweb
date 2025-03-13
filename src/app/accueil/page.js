"use client";
import Navbare from "../../components/Navbare";
import Banner from "../../components/Banner";
import Competence from "../../components/Competence";
import Projet from "../../components/Projet";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
function page() {
  return (
    <div>
      <div id="accueil">
        <Navbare />
      </div>
      <Banner />
      <Competence />
      <Projet />
      <Contact />
      <Footer />
      </div>
  );
}

export default page;
