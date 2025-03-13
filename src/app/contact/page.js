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
      <Navbare />
      <Banner />
      <Competence />
      <Projet />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default page;
