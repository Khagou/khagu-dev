import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const PortfolioContent = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/images/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des projets:", error);
      });
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio-filters">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => setActiveFilter("all")}
        >
          Tous
        </button>
        <button
          className={activeFilter === "client" ? "active" : ""}
          onClick={() => setActiveFilter("client")}
        >
          Projets Clients
        </button>
        <button
          className={activeFilter === "professional" ? "active" : ""}
          onClick={() => setActiveFilter("professional")}
        >
          Expérience Pro
        </button>
      </div>

      <div className="projects-grid">
        {projects
          .filter(
            (project) => activeFilter === "all" || project.type === activeFilter
          )
          .map((project) => (
            <div key={project._id} className="project-card">
              <h3>{project.title || project._id}</h3>
              <p className="project-description">{project.description}</p>

              <div className="technologies">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.images && project.images.length > 0 && (
                <div className="project-images">
                  <img
                    src={project.images[0].chemin}
                    alt={project.images[0].name}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsOpen(true);
                    }}
                  />
                  {project.images.length > 1 && (
                    <span className="more-images">
                      +{project.images.length - 1}
                    </span>
                  )}
                </div>
              )}

              {project.details && project.details.length > 0 && (
                <div className="project-details">
                  <ul>
                    {project.details.slice(0, 2).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                    {project.details.length > 2 && <li>...</li>}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default PortfolioContent;
