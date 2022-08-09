import React from "react";
import Apropos from "../components/home/Apropos";
import Presentation from "../components/home/Presentation";
import Skills from "../components/home/Skills";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <div className="top">
        <div className="nav">
          <Logo />
          <Navigation />
        </div>
        <Presentation />
      </div>
      <Apropos />
      <Skills />
    </div>
  );
};

export default Home;
