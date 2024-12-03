import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Profile.css";
import profileImage from "./R.png";


const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="profile fade-in">
      <div className="profile-image">
        <img src={profileImage} alt="Dev Mer" />
      </div>
      <div className="profile-details">
        <h1>Dev Mer</h1>
        <p>Bachelor of Technology in Information Technology</p>
        <p>Vadodara, Gujarat</p>
        <a href="https://github.com/devmer2311" target="_blank" rel="noopener noreferrer">
          <FaGithub /> github.com/devmer2311
        </a>
        <button className="contact-button" onClick={() => setShowPopup(!showPopup)}>
          Contact Me
        </button>
        {showPopup && (
          <div className="popup">
            <a href="mailto:devmer2311@gmail.com"><FaEnvelope /> Email</a>
            <a href="https://linkedin.com/in/dev-mer" target="_blank"><FaLinkedin /> LinkedIn</a>
            <a href="tel:8141899212"><FaPhone /> Phone</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
