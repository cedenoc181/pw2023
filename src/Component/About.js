import React from "react";

function About() {
  return (
    <div className="about bg-dark w-100 vh-100">
      <div className="row">
        <div className='about_text'>
            <h3><span>01. </span>About me</h3>
            <p>
            Greetings! I am Christian, a passionate web developer with a natural talent for crafting top-notch web applications.
             I had the privilege of attending Flatiron School, where I underwent a comprehensive 15-week software engineering program.
              This intensive training not only honed my skills in front-end and back-end development but also solidified my foundation in web development.
               I am continuously driven to expand my skill set and apply it in both my projects and personal blog, where I share my insights and understanding of new technologies.
            </p>
            <p>
                I recently finish creating a Physical therapy application that connect users to a database of physical therapist in NYC!
                Here are a few technologies I've been working with recently: 
            </p>
            <div className='row'>
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
        <div className='about_image'>
            <img src='' alt=''/>
        </div>
      </div>
    </div>
  );
}

export default About;
