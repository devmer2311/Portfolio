import React, { useState } from "react";
import "./Projects.css";
import p1 from "./deviceframes.png";
import p2 from "./pp2.png";

const projects = [
  {
    name: "AR Based Interior Design Application",
    details: "Developed an AR app for interior design using Flutter, ARCore, and Firebase.",
    duration: "Nov 2023 – Oct 2024",
    skills: ["Flutter", "ARCore", "Firebase"],
    image: p1, 
    sourceCode: "https://github.com/your-repo/project1",
  },
  {
    name: "Software Developer Salaries Prediction",
    details: "Built a salary prediction app using Python, Streamlit, Flask, and MongoDB.",
    duration: "Jun 2024 – Aug 2024",
    skills: ["Python", "Streamlit", "Flask", "MongoDB"],
    image: p2, 
    sourceCode: "https://github.com/your-repo/project2",
  },
  
  
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="projects fade-in">
      <h2>Projects</h2>
      <div className="project-slider">
        <button className="slider-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="projects-container">
          {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.details}</p>
              <span>{project.duration}</span>
              <div className="skills-used">
                <strong>Skills:</strong> {project.skills.join(", ")}
              </div>
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="source-code-btn">
                View Source Code
              </a>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Projects;
