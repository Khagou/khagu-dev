import React from "react";
import Navigation from "../components/Navigation/Navigation";
import PortfolioContent from "../components/Portfolio/PortfolioContent";

const Portfolio = () => {
  return (
    <div className="page-wrapper portfolio-page">
      <Navigation />
      <main>
        <div className="page-hero">
          <h1>Mon Portfolio</h1>
          <p>Découvrez mes projets et réalisations</p>
        </div>
        <div className="content-container">
          <PortfolioContent />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
