import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="contact">
      <button onClick={() => setShowPopup(!showPopup)}>Contact Me</button>
      {showPopup && (
        <div className="popup">
          <a href="mailto:devmer2311@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://linkedin.com/in/dev-mer"><FaLinkedin /> LinkedIn</a>
          <a href="tel:8141899212"><FaPhone /> Phone</a>
        </div>
      )}
    </div>
  );
};

export default Contact;
