import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <section className="footer-content">
        <div className="company-info">
          <img src={logo} alt="little lemon" className="footer-logo" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="footer-links">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <span role="img" aria-label="address">
                📍
              </span>
              <a
                href="https://maps.google.com/?q=123+Towncity,+USA"
                target="_blank"
                rel="noopener noreferrer"
              >
                123 Towncity, USA
              </a>
            </li>
            <li>
              <span role="img" aria-label="phone">
                📞
              </span>
              <a href="tel:+0123456789">+ 0123 456 789</a>
            </li>
            <li>
              <span role="img" aria-label="email">
                ✉️
              </span>
              <a href="mailto:little@lemon.com">little@lemon.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="/"
                aria-label="Facebook"
                className="social-icon"
              >
                🌐
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Instagram"
                className="social-icon"
              >
                📸
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Twitter"
                className="social-icon"
              >
                🐦
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
