import React from "react";
import "./Education.css";

const education = [
  {
    degree: "B.Tech (Information Technology)",
    institution: "Parul University, Vadodara",
    year: "2022 – 2025",
    score: "CGPA: 7.92/10",
  },
  {
    degree: "Diploma (Information Technology)",
    institution: "GTU, Ahmedabad",
    year: "2019 – 2022",
    score: "CGPA: 8.28/10",
  },
  {
    degree: "Class 10th",
    institution: "Aadarsh Vidyalay, Bagasara",
    year: "2018 – 2019",
    score: "Percentage: 83.5%",
  },
];

const Education = () => (
  <div className="education fade-in">
    <h2>Education</h2>
    <div className="education-cards">
      {education.map((edu, index) => (
        <div className="education-card" key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <span>{edu.year} - {edu.score}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
