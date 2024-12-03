import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <header className="header">
    <img src="/profile.jpg" alt="Profile" className="profile-image" />
    <nav>
      <a href="https://linkedin.com/in/dev-mer" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/devmer2311" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </nav>
  </header>
);

export default Header;
