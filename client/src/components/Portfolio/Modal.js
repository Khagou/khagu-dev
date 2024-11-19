import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <p>&#10539;</p>
        </button>

        <div className="modal-content">
          <h2>{project.title}</h2>

          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <p className="project-description">{project.description}</p>

          {project.images && (
            <div className="image-gallery">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  className="modalImg"
                  src={image.chemin}
                  alt={image.name}
                />
              ))}
            </div>
          )}

          {project.details && (
            <div className="project-details">
              <h3>Points clés :</h3>
              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {project.links && (
            <div className="project-links">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir la démo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
