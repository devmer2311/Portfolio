import React from "react";
import "./Skills.css";

const skills = ["Python", "JavaScript","React.js", "Node.js", "Express.js", "MongoDB", "PHP","HTML/CSS", "Flutter","Firebase","GitHub","Figma"];

const Skills = () => (
  <div className="skills-section">
    <h2>Skills</h2> 
    <div className="skills">
      {skills.map((skill) => (
        <button key={skill} className="skill">
          {skill}
        </button>
      ))}
    </div>
  </div>
);

export default Skills;
