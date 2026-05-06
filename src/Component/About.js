import React from "react";
import {useEffect} from 'react'
import './About.css'
 import Aos from 'aos' //this is for animation
import 'aos/dist/aos.css'


function About() {

useEffect(() => {
  Aos.init({duration: 1500})
}, [])


  return (
    <div id='about' className="about bg-dark vw-100 vh-100" >
      <div className="row wrapper">
        <div className='about-text col-12 col-md-6 col-lg-6 px-5' data-aos = 'zoom-in-up' data-aos-delay="500" data-aos-duration="1500">
            <h3><span>01. </span>About me</h3>
            <p class="about-p">
            I'm Christian — founder and lead engineer at <a className='inline-link' href='https://sandlotpicks.com'>Sandlotpicks.com</a>,
             a machine-learning platform that predicts MLB batter and pitcher prop outcomes. I started Sandlotpicks to combine
              two things I care about: baseball and software that solves real problems. I designed the data pipeline, trained
               the models, built the API, and shipped the product end-to-end.
            </p>
            <p class="about-p">
                My background is full-stack — I trained at Flatiron School and previously built clinical document and
                 review tools at Pro Health and Fitness. Today I spend most of my time on Python, FastAPI, and ML model
                  iteration, with a React frontend layered on top. Open to conversations about engineering roles,
                   collaborations, or Sandlotpicks itself.
            </p>
            <p class="about-p">
                Tech I work with day-to-day:
            </p>
            <div className='row technology'>
                <div className='col-6'>
                    <p><span>‣</span>Python</p>
                    <p><span>‣</span>FastAPI</p>
                    <p><span>‣</span>PostgreSQL</p>
                    <p><span>‣</span>scikit-learn</p>
                </div>
                <div className='col-6'>
                    <p><span>‣</span>XGBoost</p>
                    <p><span>‣</span>pandas</p>
                    <p><span>‣</span>React.Js</p>
                    <p><span>‣</span>JavaScript</p>
                </div>
            </div>
        </div>
        <div className='about_image col-12 col-md-6 col-lg-6
        d-flex justify-content-center align-items-center' data-aos = 'fade-right'>
            <img src={require('../Images/me.png')} alt='me'/>
        </div>
      </div>
    </div>
  );
}

export default About;
