import React from "react";
import "./Experience.css";
import "bootstrap/js/dist/tab";
import Aos from "aos"; //this is for animation
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      id="experience"
      className="d-flex experience flex-column align-items-center w-100 vh-100 justify-content-center bg-dark"
    >
      <div className=" nav-container w-50 text-white" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1500">
        <h3>
          <span>02. </span> My Experience
        </h3>
        <div class="d-flex mt-5 text-white">
          <div
            class="nav flex-column nav-pills me-3 border-start"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-sandlot-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-sandlot"
              type="button"
              role="tab"
              aria-controls="v-pills-sandlot"
              aria-selected="true"
            >
              Sandlotpicks
            </button>

            <button
              class="nav-link"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="false"
            >
            ProHealth & Fitness
            </button>

            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Flatiron School
            </button>
          </div>
          <div class="tab-content tabs_detail ms-3" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-sandlot"
              role="tabpanel"
              aria-labelledby="v-pills-sandlot-tab"
            >
              <h5>
                Founder & Software Engineer{" "}
                <a href="https://sandlotpicks.com">
                  @Sandlotpicks.com
                </a>
              </h5>
              <span className="date">2025 - Present</span>
              <p>
                <br />
                <span>‣</span>
                Founded Sandlotpicks, a machine-learning platform that predicts MLB batter
                 and pitcher prop outcomes (total bases, RBIs, hits, home runs, strikeouts,
                 earned runs, pitcher outs) using historical game logs and matchup-specific features.
              </p>
              <p>
                <span>‣</span>
                Built the full data + ML pipeline in Python: ingestion ETL, rolling-metric
                 feature engineering, model training and comparison across Random Forest and
                 XGBoost, and daily automated re-training and prediction jobs.
              </p>
              <p>
                <span>‣</span>
                Stack: Python, FastAPI, PostgreSQL, SQLAlchemy, scikit-learn, XGBoost, pandas,
                 numpy, joblib. Frontend in React. Designed every layer end-to-end.
              </p>
            </div>

            <div
              class="tab-pane fade"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
               <h5>
                Frontend Software Developer{" "}
                <a href="https://prohealthptot.com/">
                @Pro Health and Fitness PT OT
                </a>
              </h5>
              <span className="date">January 2023 - 2025</span>
              <p>
              <br />
                <span>‣</span>
                Built web applications that met real business needs at a 4-clinic physical
                 therapy practice. My QR code review tool drove a 100% growth in Google reviews
                 across all clinics by streamlining the patient feedback flow.
              </p>
              <p>
                <span>‣</span>
                Created the Pro Health and Fitness PDF Repository to centralize clinical
                 document management. The system accelerated therapist authorization by 45%
                 and cut administrative search effort by 60%.
              </p>

            </div>

            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <h5>
                Student Software Engineer{" "}
                <a href="https://flatironschool.com/">
                  @Flatiron School
                </a>
              </h5>
              <span className="date">Sep 2022 - January 2023</span>
              <p>
                <br />
                   <span>‣</span>
                   Completed a 15-week immersive software engineering program covering
                   JavaScript, React, Ruby, and Ruby on Rails.
              </p>
              <p>
                   <span>‣</span>
                   Built dynamic full-stack web applications across multiple group and
                   individual projects, learning to ship features end-to-end.
              </p>
              <p>
                    <span>‣</span>
                    Graduated confident in my ability to learn new languages and frameworks
                    quickly — a skill that paid off when picking up Python, FastAPI, and ML
                    tooling for Sandlotpicks.
              </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
