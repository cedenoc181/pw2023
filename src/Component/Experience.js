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
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
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
            {/* <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
             <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
          </div>
          <div class="tab-content tabs_detail ms-3" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
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
              <span className="date">January 2023 - Present</span>
              <p>
              <br />
                <span>‣</span>
                At Pro Health and Fitness, I leveraged my Flatiron School skills to create web applications that met business needs.
                 My QR code applications led to a 100% growth in Google reviews, 
                streamlining the process and boosting positive reviews across all 4 clinics. </p>
              <p>
                <span>‣</span>
                I created the Pro Health and Fitness PDF Repository to enhance document management.
                 The solution accelerated therapist authorization by 45%,
                 and reduced administrative search efforts by an impressive 60%, leading to notable efficiency gains and improved workflow.
              </p>

            </div>

            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <h5>
                student software Engineer{" "}
                <a href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169839&utm_content=127574231184&utm_term=flatiron%20school&uqaid=513799628798&CjwKCAjw__ihBhADEiwAXEazJhhGFknmKW9KmfTLvxy1WNknOyr9SbEpLtLUrsmoxMNLL2AHYHmAAhoCtQoQAvD_BwE&gclid=CjwKCAjw__ihBhADEiwAXEazJhhGFknmKW9KmfTLvxy1WNknOyr9SbEpLtLUrsmoxMNLL2AHYHmAAhoCtQoQAvD_BwE">
                  @Flatiron School
                </a>
              </h5>
              <span className="date">Sep 2022 - January 2023</span>
              <p>
                <br />
                   <span>‣</span>
                   During my time at Flatiron School, I had the opportunity to
                   immerse myself in a fast-paced 15-week program, where I learned
                   the ins and outs of JavaScript, React JS, Ruby and Ruby on
                   Rails.
              </p>
              <p>
                   <span>‣</span>
                   Through various group projects and individual assignments,I
                   honed my skills in building dynamic web applications, utilizing
                   React and Ruby on Rails to create both the front-end and
                   back-end of the application.
              </p>
              <p>
                    <span>‣</span>
                    By the end of the program, I felt confident in my abilities to
                    use these technologies in real-world situations and confident in
                    my abilities to learn new languages as well.
              </p>
        </div>
        {/* <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
        
        </div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
        
        </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;