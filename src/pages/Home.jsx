import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section-main py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold ">
                Discover a world of creamy dairy products and luscious confections with B.Laban.
              </h1>
              <p className="lead mt-3">
                Indulge in the finest dairy products, made with love and fresh ingredients, for an unforgettable taste experience.
              </p>
              <a href="/menu" className="btn btn-primary btn-lg mt-4">
                See Our Products
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero-image-container position-relative">
                <img
                  src="/images/home-page/icecream.png"
                  alt="Assortment of creamy ice cream cups"
                  className="img-fluid hero-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BEST SELLERS ===== */}
      <section className="best-seller-section mt-5" aria-labelledby="best-seller-heading">
        <div className="container">
          <h2 id="best-seller-heading">Our Best Sellers</h2>
          <div className="image-gallery">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                className={`img-container ${index === 2 ? "center-img" : ""}`}
                key={index}
              >
                <img
                  src="./images/home-page/ice cream cup.png"
                  alt="Signature Ice Cream Cup"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY B.LABAN ===== */}
      <section className="why-blaban-section py-5 mt-5" aria-labelledby="why-blaban-heading">
        <div className="container">
          <h2 id="why-blaban-heading" className="text-center mb-5">
            Why Choose B.Laban?
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-item p-4">
                <img
                  src="/images/home-page/leaf.png"
                  alt="All-Natural Ingredients"
                  className="mb-3"
                />
                <h5>All-Natural Ingredients</h5>
                <p>
                  Crafted from the purest ingredients, ensuring authentic flavors
                  and wholesome goodness in every bite.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item p-4">
                <img
                  src="/images/home-page/love.png"
                  alt="Made with Passion"
                  className="mb-3"
                />
                <h5>Made with Passion</h5>
                <p>
                  Every treat we make is infused with passion and dedication,
                  bringing you delightful and unforgettable tastes.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item p-4">
                <img
                  src="/images/home-page/loc.png"
                  alt="Locally Loved"
                  className="mb-3"
                />
                <h5>Locally Loved</h5>
                <p>
                  A cherished part of the Alexandria community, our products are
                  a local favorite, made for our beloved customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR ACHIEVEMENTS ===== */}
      <section className="stats-section py-5" aria-labelledby="achievements-heading">
        <div className="container">
          <h2 id="achievements-heading" className="mb-5 text-center">
            Our Achievements
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="stat-item">
                <h3>140+</h3>
                <p>Branches</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-item">
                <h3>160+</h3>
                <p>Products</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-item">
                <h3>3M+</h3>
                <p>Customers Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY + CONTACT ===== */}
      <section className="gallery-contact-section py-5 mt-5" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 id="gallery-heading" className="mb-4">Gallery</h2>
              <div className="row g-3">
                {[1, 2, 3, 4, 5, 6].map((img, i) => (
                  <div className="col-4" key={i}>
                    <img
                      src="./images/home-page/ice cream cup.png"
                      alt="Gallery image"
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card shadow-lg p-4">
                <h2 className="mb-4">Get In Touch</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAREER SECTION ===== */}
      <section className="career-section hero-header py-5" aria-labelledby="career-heading">
        <div className="container text-center text-white">
          <h1 id="career-heading" className="display-4 fw-bold mb-3">
            Hire Skilled Talent with Confidence
          </h1>
          <p className="lead col-lg-8 mx-auto">
            B.Laban is here to assist employers in navigating the process of sponsoring skilled workers,
            ensuring a smooth and confident hiring journey.
          </p>
        </div>
      </section>

      <section className="main-content-section py-5">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card text-center p-4 h-100">
                <div className="icon-circle mx-auto mb-3">
                   <FontAwesomeIcon icon={faCheck} size="2x" />
                </div>
                <h4 className="card-title mb-2">Eligibility Checker</h4>
                <p className="card-text">Determines eligibility with quick queries.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card text-center p-4 h-100">
                <div className="icon-circle mx-auto mb-3">
                   <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
                <h4 className="card-title mb-2">Step-by-Step Guide</h4>
                <p className="card-text">Supports for the application process.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-card card h-100">
                <div className="position-relative">
                  <img
                    src="./images/home-page/balban team.png"
                    alt="B.Laban team collaborating"
                    className="img-fluid rounded video-thumbnail"
                  />
                  <a href="#" className="video-overlay d-flex justify-content-center align-items-center">
                  </a>
                  <h4 className="video-title position-absolute text-white">
                    How to Sponsor a Skilled Worker
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

