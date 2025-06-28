// src/components/HeroSection.js
import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Transforming Challenges into Solutions:
          <br />
          Your <span className="highlight">Trusted Partner</span>
        </h1>
        <p className="subtitle">Customized Solutions for Every Business Challenge</p>
        <p className="cta-msg">
          <span className="arrow">➜</span> Transform your business with a powerful online presence.
          <br />
          Book now for exclusive incentives!
        </p>
        <form className="consult-form">
          <input type="text" placeholder="Phone Number" />
          <select>
            <option>Select service</option>
            <option>Website Development</option>
            <option>Mobile App</option>
            <option>UI/UX Design</option>
            <option>SEO</option>
          </select>
          <button type="submit" className="hero-btn">Get Free Consultation</button>
        </form>
      </div>
      <div className="hero-right">
        <div className="masonry-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <img
              key={index}
              src={`/images/person${index + 1}.jpg`}
              alt={`WebStitch Team Member ${index + 1}`}
              className="masonry-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
