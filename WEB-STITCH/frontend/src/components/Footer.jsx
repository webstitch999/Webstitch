import React from "react";
import "../styles/Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <p>Near ZP school Ambegoan khurd, Narhe, Pune, Maharashtra 411041</p>
          <p>info@groweb.in</p>
          <p className="footer-phone">+91 92846 56561</p>
          <div className="footer-socials">
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Media Marketing</li>
            <li>Branding</li>
            <li>SEO</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick links</h4>
          <ul>
            <li>Home</li>
            <li>Why Groweb</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help & FAQ</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Groweb. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
