import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF}from "@fortawesome/free-brands-svg-icons";
import "./about.css";


export default function About() {
  useEffect(() => {
    const timelineSwiper = new Swiper(".swiper-container--timeline", {
      direction: "horizontal",
      loop: false,
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "slide",
      watchOverflow: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination-progressbar",
        type: "progressbar",
      },
      on: {
        slideChange: function () {
          const paginationSwitches = document.querySelectorAll(
            ".swiper-pagination-custom .swiper-pagination-switch"
          );
          paginationSwitches.forEach((el) => el.classList.remove("active"));
          paginationSwitches[timelineSwiper.realIndex]?.classList.add("active");

          const fill = document.querySelector(
            ".swiper-pagination-progressbar-fill"
          );
          if (fill) {
            const colors = ["#0074d9", "#0074d9", "#0074d9", "#0074d9"];
            fill.style.background = colors[timelineSwiper.realIndex];
          }
        },
      },
    });

    const paginationSwitches = document.querySelectorAll(
      ".swiper-pagination-custom .swiper-pagination-switch"
    );
    paginationSwitches.forEach((sw, index) => {
      sw.addEventListener("click", () => {
        timelineSwiper.slideTo(index);
      });
    });

    if (paginationSwitches[timelineSwiper.realIndex]) {
      paginationSwitches[timelineSwiper.realIndex].classList.add("active");
    }
  }, []);

  // branches
  const branchesData = [
    { country: "Egypt", branches: 91, flag: "/images/About-page/egypt.jpg" },
    { country: "KSA", branches: 35, flag: "/images/About-page/saudia.jpg" },
    { country: "UAE", branches: 35, flag: "/images/About-page/UAE.jpg" },
    { country: "Jordan", branches: 5, flag: "/images/About-page/Jordan.jpg" },
    { country: "Oman", branches: 19, flag: "/images/About-page/oman.png" },
    { country: "Qatar", branches: 29, flag: "/images/About-page/qatar.png" },
    { country: "Libya", branches: 39, flag: "/images/About-page/libya.jpg" },
    { country: "Morocco", branches: 19, flag: "/images/About-page/maracco.jpg" },
    { country: "Italy", branches: 7, flag: "/images/About-page/italy.png" },
    { country: "U.K", branches: 27, flag: "/images/About-page/england.jpg" },
    { country: "U.S.A", branches: 77, flag: "/images/About-page/USA.jpg" },
    { country: "Omna", branches: 7, flag: "/images/About-page/oman.png" },
  ];

  return (
    <div className="about-page">
      {/*  Hero Section */}
      <section className="hero-section">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="fas fa-home me-1"></i> Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <h1 className="text-white">About Us</h1>
        </div>
      </section>

      {/*  About Content */}
      <section className="main-about-content py-5">
        <div className="container">
          <div className="row mb-5 align-item-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">About Blaban</h2>
              <p className="lead mb-3">
                Established in 2021, Alexandria, Blaban began as a small factory
                specializing in traditional Egyptian desserts such as rice pudding,
                couscous, Om Ali, and ice cream. Blaban revolutionized the market
                with its innovative product, Ashtouta, which quickly became a
                bestseller and drove rapid growth.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/About-page/about blban.jpg"
                alt="About Blaban"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/About-page/about blban.jpg"
                alt="Blaban Numbers"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Commitment To Quality</h2>
              <p className="mb-4">
                Blaban operates under a robust Quality Assurance Department To Ensure
                Consistency, Precision, And Excellence. This Focus Is Guided By The
                Expertise Of Dr. Moamen Ammar, Whose Veterinary Background Emphasizes
                Attention To Detail.
              </p>
              <a href="/menu" className="btn btn-primary btn-lg mt-4">
                See Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  Timeline Section */}
      <div className="container">
        <div className="swiper-container-wrapper swiper-container-wrapper--timeline mt-5">
          <ul className="swiper-pagination-custom">
            <li className="swiper-pagination-switch first active" data-year="2021">
              <span className="switch-title">2021</span>
            </li>
            <li className="swiper-pagination-switch" data-year="2023">
              <span className="switch-title">2023</span>
            </li>
            <li className="swiper-pagination-switch" data-year="2024">
              <span className="switch-title">2024</span>
            </li>
            <li className="swiper-pagination-switch last" data-year="2025">
              <span className="switch-title">2025</span>
            </li>
          </ul>
          <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
          <div className="swiper swiper-container swiper-container--timeline">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-content">
                  <h3 className="slide-title">2021</h3>
                  <p className="slide-description">22 branches across Egypt.</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-content">
                  <h3 className="slide-title">2023</h3>
                  <p className="slide-description">
                    53 branches (18 in Upper Egypt, 3 in KSA).
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-content">
                  <h3 className="slide-title">2024</h3>
                  <p className="slide-description">
                    87 branches in Egypt, 30 in KSA, and new branches in Oman,
                    Qatar, Libya, Jordan, and UAE.
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-content">
                  <h3 className="slide-title">2025</h3>
                  <p className="slide-description">
                    Expanding to Morocco, Kuwait, Bahrain, Iraq, Europe, and the USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Global Branches Section */}
      <section className="global-branches-section py-5 mt-5">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Our Global Branches</h2>
          <div className="row justify-content-center g-4">
            {branchesData.map((branch, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="flag-card-alt p-3 rounded-3 shadow-sm text-center">
                  <img
                    src={branch.flag}
                    alt={`${branch.country} Flag`}
                    className="flag-img-alt mb-3"
                  />
                  <h5 className="fw-bold mb-1 text-primary">{branch.country}</h5>
                  <p className="text-muted mb-0">{branch.branches} Branch's</p>
                  <a
                    href="#"
                    className="btn btn-facebook btn-sm rounded-pill mt-3"
                  >
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

