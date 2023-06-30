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
    <div id='about' className="about bg-dark w-100 vh-1000" >
      <div className="row wrapper">
        <div className='about-text col-12 col-md-6 col-lg-6 px-5' data-aos = 'fade-right'>
            <h3><span>01. </span>About me</h3>
            <p>
            Greetings! I am Christian, a passionate web developer with a natural talent for crafting top-notch web applications.
             I had the privilege of attending Flatiron School, where I underwent a comprehensive 15-week software engineering program.
              This intensive training not only honed my skills in front-end and back-end development but also solidified my foundation in web development.
               I am continuously driven to expand my skill set and apply it in both my projects and personal blog, where I share my insights and understanding of new technologies.
            </p>
            <p>
                I recently finish creating a Physical therapy application that stores clinical and administrative documents and allows the capibilities to edit, print and download PDF's!
                Here are a few technologies I've been working with recently: 
            </p>
            <div className='row technology'>
                <div className='col-6'>
                    <p><span>‣</span>JavaScript</p>
                    <p><span>‣</span>React.Js</p>
                    <p><span>‣</span>Bootstrap</p>
                </div>
                <div className='col-6'>
                    <p><span>‣</span>Ruby on Rails</p>
                    <p><span>‣</span>HTML/CSS</p>
                    <p><span>‣</span>OOP</p>
                </div>
            </div>
        </div>
        <div className='about_image col-12 col-md-6 col-lg-6
        d-flex justify-content-center align-items-center' data-aos = 'fade-left'>
            <img src={require('../Images/me.png')} alt='me'/>
        </div>
      </div>
    </div>
  );
}

export default About;
