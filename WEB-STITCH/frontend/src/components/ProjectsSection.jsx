// src/components/ProjectsSection.js
import React from "react";
import "../styles/ProjectsSection.css";

const projects = [
  {
    image: "/images/svk.png", // make sure the images exist in public/images/
    title: "SVK Landmark",
    category: "Development",
  },
  {
    image: "/images/videshi.png",
    title: "Videshi jodi",
    category: "Development",
  },
  {
    image: "/images/kalaclap.png",
    title: "Kala Clap",
    category: "Development",
  },
  {
    image: "/images/arun.png",
    title: "Arun Naturals",
    category: "Development",
  },
  {
    image: "/images/amrutvam.png",
    title: "Amrutvam Chai",
    category: "Development",
  },
  {
    image: "/images/agricos.png",
    title: "Agricos Foods",
    category: "Development",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        Our projects <span className="highlight">make us proud</span>
      </h2>

      <div className="project-categories">
        <span className="active">All</span>
        <span>design</span>
        <span>development</span>
        <span>marketing</span>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <p className="category">{project.category}</p>
            <h4>{project.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
