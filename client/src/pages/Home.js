import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Presentation from "../components/home/Presentation";
import Apropos from "../components/home/Apropos";
import Skills from "../components/home/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page-wrapper home-page">
      <Navigation />

      <main>
        <div className="topAccueil">
          <Presentation />
        </div>

        <Apropos />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
