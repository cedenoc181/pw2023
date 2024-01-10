import React, {useState} from "react";
import "./Project.css";
import {useEffect} from 'react'
import Aos from 'aos' //this is for animation
import 'aos/dist/aos.css'



function Project() {

  const [git, setGit] = useState(true);
  const [git2, setGit2] = useState(true);
  const [git3, setGit3] = useState(true);

function handleClick() {
    setGit(!git)
}

function handleClick2() {
  setGit2(!git2)
}

function handleClick3() {
  setGit3(!git3)
}

    useEffect(() => {
        Aos.init({duration: 1500})
      }, [])

  return (
    <div id='projects' className="bg-dark w-100 vh-100 projects">
      <div className="container">
        <h3 className="px-5 text-white">
          <span>03. </span>My Projects
        </h3>
        <div class="row row-cols-1 row-cols-md-3 g-5 p-5 text-center">
          <div class="col" data-aos = 'fade-right'>
            <div className="card text-white">
              <img src={require("../Images/PTconnect.jpg")} class="card-img-top" alt="PTconnect" />
              <div className="card-body bg-dark">
                <h5 class="card-title text-decoration-underline">PTconnect</h5>
                <p class="card-text ">
                  A booking application for Physical therapist looking to grow their clientel in NYC. 
                  PTconnect holds a database of providers all over nyc. Providing users 
                  access to top professionals that meet their needs. 

                </p>
                <button className='bg-transparent' onClick={handleClick}>{git ? "Load More!" : "Close"}</button>
                {git ? (null) : (
                <div className="link-con">
                  <a className="project-link" href="https://github.com/cedenoc181/pt-connect-backend-"><span>1. </span>Backend Repository</a>
                  <br />
                  <a className="project-link" href="https://github.com/cedenoc181/Pt-connect-frontend-"><span>2. </span>Frontend Repository</a>
                </div>
                )}
              </div>
            </div>
          </div>
          <div class="col" data-aos = 'zoom-in'>
            <div className="card text-white">
              <img src={require("../Images/prohealth-logo.png")} class="card-img-top pb-3" alt="Project 2" />
              <div className="card-body bg-dark">
                <h5 class="card-title text-decoration-underline">Pro Health and Fitness QR code</h5>
                <p class="card-text">
                  This is JavaScript application I built and deployed for Pro Health and Fitness physical therapy.
                   The intentions was to use Qr codes to improve the accessibility for patients to leave a review about their experience. 
                </p>
                <button className='bg-transparent' onClick={handleClick2}>{git2 ? "Load More!" : "Close"}</button>
                {git2 ? (null) : (
                <div className="link-con">
                  <a className="project-link" href="https://github.com/cedenoc181/Prohealth-qrCode.git"><span>1. </span>Repository</a>
                  <br />
                  <a className="project-link" href="https://prohealthptot.netlify.app/"><span>2. </span>Website</a>
                </div>
                )}
              </div>
            </div>
          </div>
          <div class="col" data-aos = 'fade-left'>
            <div className="card text-white">
              <img src={require("../Images/prohealth-logo.png")} class="card-img-top pb-3" alt="Project 3" />
              <div className="card-body bg-dark">
                <h5 class="card-title text-decoration-underline">Pro Health and Fitness PT OT Repository</h5>
                <p class="card-text">
                React js application made to store PDF files used for clinical practice by physical therapist and administrative staff.
                 This application use React, react router, react loader spinner and bootstrap.
                </p>
                <button className='bg-transparent' onClick={handleClick3}>{git3 ? "Load More!" : "Close"}</button>
                {git3 ? (null) : (
                <div className="link-con">
                  <a className="project-link" href="https://github.com/cedenoc181/ProHealthRepository.git"><span>1. </span>Frontend Repository</a>
                  <br />
                  <a className="project-link" href="null"><span>2. </span>website coming soon</a>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
