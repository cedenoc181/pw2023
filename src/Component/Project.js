import React, { useState } from "react";
import "./Project.css";
import { useEffect } from "react";
import Aos from "aos"; //this is for animation
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Project() {
  
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false; // collapse all cards first
      });
      newState[id] = !prev[id]; // toggle the clicked card
      return newState;
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Keep your horizontal layout
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="bg-dark w-100 vh-100 projects">
      <div className="container">
        <h3 className="px-5 text-white">
          <span>03. </span>My Projects
        </h3>
        <Slider {...settings}>
          {/* ProHealth Portal */}
          <div
            class="card-con"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="3000"
          >
            <div className="card text-white">
              <img
                src={require("../Images/medifile-ui.png")}
                class="card-img-top"
                alt="ProHealthPortal-ui"
              />
              <div className="card-body bg-dark">
                  <h5 class="card-title text-decoration-underline text-white">
                    ProHealthPortal
                  </h5>
                <p class="card-text">
                  Full stack application for clinical operation management.
                  Manage & store documents, email templates, clinical inventory
                  management. This web app is built using Ruby on Rails, React
                  Js, AWS S3, PostgresQL, JWT authentication.
                </p>
                <button className="bg-transparent" onClick={() => handleToggle(1)}>
                {expanded[1] ? "Close" : "Load More!"}
                </button>
                {expanded[1] &&  (
                  <div className="link-con">
                    <a
                      className="project-link"
                      href="https://github.com/cedenoc181/prohealthportal.com"
                    >
                      <span>1. </span>Repository
                    </a>
                    <br />
                    <a
                      className="project-link"
                      href="https://prohealthptot.info/"
                    >
                      <span>2. </span>Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        
          {/* ProHealth info(QR code app) */}
          <div
            class="card-con"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="3000"
          >
            <div className="card text-white">
              <img
                src={require("../Images/prohealthInfo-ui.png")}
                class="card-img-top"
                alt="Project 2"
              />
              <div className="card-body bg-dark">
                <a href="https://prohealthptot.info/">
                  <h5 class="card-title text-decoration-underline text-white">
                    ProHealthPTOT.info
                  </h5>
                </a>
                <p class="card-text">
                  Deployed Javascript application for Pro Health and Fitness
                  physical therapy. The intentions was to use Qr codes to
                  improve the accessibility for patients to leave a review about
                  their experience. Optomized for mobile devices.
                </p>
                <button className="bg-transparent" onClick={() => handleToggle(2)}>
                {expanded[2] ? "Close" : "Load More!"}
                </button>
                {expanded[2] &&  (
                  <div className="link-con">
                    <a
                      className="project-link"
                      href="https://github.com/cedenoc181/Prohealth-qrCode.git"
                    >
                      <span>1. </span>Repository
                    </a>
                    <br />
                    <a
                      className="project-link"
                      href="https://prohealthptot.info/"
                    >
                      <span>2. </span>Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* MajesticPips */}
          <div
            class="card-con"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="3000"
          >
            <div className="card text-white">
              <img
                src={require("../Images/Majesticpips.png")}
                class="card-img-top"
                alt="majesticPips-UI"
              />
              <div className="card-body bg-dark">
                <a href="https://majesticpips.com/">
                  <h5 class="card-title text-decoration-underline text-white">
                    MajesticPips.com
                  </h5>
                </a>
                <p class="card-text ">
                  Majesticpips.com, a currency trading community built using
                  MERN stack. This application is the landing page for
                  Majesticpips Telegram/discord currently hosting a community of
                  hundreds of members.
                </p>
                <button className="bg-transparent" onClick={() => handleToggle(3)}>
                {expanded[3] ? "Close" : "Load More!"}
                </button>
                {expanded[3] &&  (
                  <div className="link-con">
                    <a
                      className="project-link"
                      href="https://github.com/cedenoc181/pt-connect-backend-"
                    >
                      <span>1. </span>Backend Repository
                    </a>
                    <br />
                    <a
                      className="project-link"
                      href="https://github.com/cedenoc181/Majesticpips-client.git"
                    >
                      <span>2. </span>Frontend Repository
                    </a>
                    <br />
                    <a
                      className="project-link"
                      href="https://majesticpips.com/"
                    >
                      <span>3. </span> Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Le Movie hub */}
          <div class="card-con"             
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="3000">
            <div className="card text-white">
              <img
                src={require("../Images/moviehub-cover.png")}
                class="card-img-top pb-0"
                alt="Project 3"
              />
              <div className="card-body bg-dark">
                <a href="https://lemoviehub.netlify.app/">
                  <h5 class="card-title text-decoration-underline text-white">
                    LeMovieHub.App
                  </h5>
                </a>
                <p class="card-text">
                  My introductory to React js project. This is a movie query
                  application. Have a movie in mind? type it in and API will
                  spit something out! This application use React, google fonts
                  and OMDB API. Optomized for mobile devices.
                </p>
                <button className="bg-transparent" onClick={() => handleToggle(4)}>
                {expanded[4] ? "Close" : "Load More!"}
                </button>
                {expanded[4] && (
                  <div className="link-con">
                    <a
                      className="project-link"
                      href="https://github.com/cedenoc181/LeMovieHub.git"
                    >
                      <span>1. </span>Repository
                    </a>
                    <br />
                    <a
                      className="project-link"
                      href="https://lemoviehub.netlify.app/"
                    >
                      <span>2. </span>website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Project;
