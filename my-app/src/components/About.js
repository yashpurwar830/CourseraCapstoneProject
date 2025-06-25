import React from "react";
import logo from "../images/littlelemon_logo.png";

const Chicago = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">Little Lemon</h2>
            <h3 className="about-subtitle">Chicago</h3>
            <p className="about-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p className="about-description">
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <img
              src={logo}
              alt="Little Lemon Logo"
              className="about-img"
              style={{ marginTop: "20px", maxWidth: "180px", borderRadius: "12px" }}
            />
          </div>
          <div className="about-owners">
            <div className="about-owners-box">
              <img
                src="https://placehold.co/120x120?text=Owners"
                alt="Adrian and Mario"
                style={{ borderRadius: "50%", marginBottom: "10px" }}
              />
              <span className="about-owners-names">Adrian and Mario</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return <Chicago />;
};

export default About;
