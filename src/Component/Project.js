import React from "react";
import "./Project.css";
import { useEffect } from "react";
import Aos from "aos"; //this is for animation
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const techStack = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "scikit-learn",
    "XGBoost",
    "pandas",
    "React",
  ];

  return (
    <div id="projects" className="bg-dark w-100 projects">
      <div className="container featured-container">
        <h3 className="px-5 text-white">
          <span>03. </span>Featured Project
        </h3>

        <div
          className="featured-card"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <div className="featured-header">
            <img
              src={require("../Images/spa-retro-logo-removebg.png")}
              alt="Sandlotpicks logo"
              className="featured-logo"
            />
            <div className="featured-title-block">
              <a
                href="https://sandlotpicks.com"
                className="featured-title-link"
              >
                <h4 className="featured-title">Sandlotpicks.com</h4>
              </a>
              <p className="featured-subtitle">
                AI/ML-powered baseball analytics · Founder & Engineer
              </p>
            </div>
          </div>

          <p className="featured-description">
            Sandlot Picks Analytics is an AI and machine-learning powered
            baseball analytics platform that forecasts MLB batter and pitcher
            prop outcomes — total bases, RBIs, hits, home runs, strikeouts,
            earned runs, and pitcher outs. The prediction engine fuses rolling
            performance metrics, season-level statistics, and matchup-specific
            opponent data (WHIP, OPS, K-rate, batting splits) to surface real
            edges in player matchups and betting markets. Built end-to-end:
            ETL pipeline, feature engineering layer, Random Forest and XGBoost
            models benchmarked on RMSE and R², a FastAPI prediction service,
            and a responsive React analytics frontend.
          </p>

          <div className="featured-tech">
            {techStack.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          <div className="featured-screenshots">
            <img
              src={require("../Images/batter-prop-page.png")}
              alt="Sandlotpicks batter prop predictions"
              className="screenshot"
            />
            <img
              src={require("../Images/pitcher-prop-page.png")}
              alt="Sandlotpicks pitcher prop predictions"
              className="screenshot"
            />
            <img
              src={require("../Images/game-prop-page.png")}
              alt="Sandlotpicks game prop predictions"
              className="screenshot"
            />
          </div>

          <div className="featured-actions">
            <a
              className="featured-btn primary"
              href="https://sandlotpicks.com"
            >
              Visit Sandlotpicks →
            </a>
            <a className="featured-btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
