import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-header">
        <div className="contact-left">
          <h2>
            To make requests for further information, <br />
            <span className="highlight">contact us.</span>
          </h2>
          <p>
            Team up with the best collaboration from the right expertises.
            <br />
            We provide a wide range of web development services to ensure your success.
          </p>
        </div>
        <div className="contact-right">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="First Name" />

            <label>Email <span className="required">*</span></label>
            <input type="email" placeholder="Email Address" required />

            <label>Phone Number <span className="required">*</span></label>
            <input type="tel" placeholder="Phone Number" required />

            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>

      <div className="contact-info-container">
        <div className="contact-box">
          <h3>Contact Info 1</h3>
          <p>Near ZP school Ambegoan khurd, Narhe, Pune, Maharashtra 411041</p>
          <a href="mailto:info@groweb.in">info@groweb.in</a>
          <p>+91 92846 56561</p>
        </div>
        <div className="contact-box">
          <h3>Contact Info 2</h3>
          <p>Near ZP school Ambegoan khurd, Narhe, Pune, Maharashtra 411041</p>
          <a href="mailto:careers@groweb.in">careers@groweb.in</a>
          <p>+91 70589 01609</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
