import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTiktok,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./main.css";

export default function Footer() {
  return (
    <footer className="footer-section mt-5">
      {/* Wave SVG */}
      <svg
        className="footer-wave-svg"
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25 L1440,50 L0,50 Z"></path>
      </svg>

      <div className="container footer-content">
        <div className="row">
          {/* Logo & Address */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="logo-text">
              <img
                src="/images/home-page/logo.png"
                alt="B.Laban Logo"
                className="img-fluid footer-logo"
              />
              <span className="arabic-text"> - بلبن </span>
            </div>
            <address>
              <p>9 Abbas Helmy Street, Al Merghani</p>
              <p>Cairo, Egypt</p>
            </address>
          </div>

          {/* Main Menu */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Main Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Our Menu</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center text-md-start">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            Copyright ©2025 B.Laban. All rights reserved.
          </p>
          <p className="made-with mb-2 mb-md-0">
            <span>Made by </span>
            <a
              href="https://example.com/sil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sil
            </a>
          </p>

          {/* Social Icons & Up Arrow */}
          <div className="d-flex align-items-center social-and-up-arrow">
            <div className="social-icons me-3">
              <a
                href="https://www.facebook.com/blaban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.youtube.com/blaban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.instagram.com/blaban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.tiktok.com/blaban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="https://www.linkedin.com/company/blaban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="mailto:info@blaban.com" aria-label="Send us an email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <span className="hit-counter me-3" role="status" aria-live="polite">
              Hit counter 452817
            </span>
            <a href="#top" className="up-arrow text-white" aria-label="Back to top">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
