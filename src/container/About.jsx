import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-content">
        {/* Background Image Section */}
        <img src="/images/garden123.png" alt="Beautiful Garden" className="about-image" />
        {/* Text Content */}
        <div className="about-text">
          <h3>Hello Clients,</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="about-footer">
        <span>© Copyright Reserved</span>
        <span>Designed by dhanazaweb</span>
      </footer>
    </div>
  );
};

export default About;
