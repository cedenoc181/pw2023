import React from 'react'
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import Typewriter from 'typewriter-effect'



function Home() {

  return (
    <div id='home' className='home bg-dark w-100 vh-100'>
        <Nav />
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href='https://github.com/cedenoc181'>
                  <i className='bi bi-github text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                <li><a href='https://www.linkedin.com/in/christian-cedeno-249187124/'>
                  <i className='bi bi-linkedin text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                {/* <li><a href='#'>
                  <i className='bi bi-envelope text-secondary' style={{fontSize: '25px'}}></i>
                  </a></li> */}
                <li><a href='https://dev.to/cedsengine'>
                  <i className='bi bi-medium text-secondary' style={{fontSize: '25px'}}></i>
                  </a></li>
            </ul>
        </div>
        <div className='email-container'>
          <p>Christiancedenob.f@gmail.com</p>
        </div>
        <main>
          <p className='hi-name'>Hi, my name is</p>
          <h1 className='text-white'>Christian Cedeno.</h1>
          <h2>
            <Typewriter
            options={{
              autoStart: true, 
              loop: true,
              delay: 120,
              strings: ['I am a Full Stack Software Engineer.', 'I build things with my keyboard.', 'Welcome to my website!']
            }}
            />
             </h2>
             <p className='details'>
             As a Full-Stack Software Engineer driven by fervor for crafting innovative, high-impact applications,<br />
              I am passionate about using my skills to solve real world problems, contribute to the progress of society<br />
              and ultimately make a difference in the world through my keyboard.
             </p>
             <button className="bg-transparent"><a className='learn' href="#about">Learn about me </a></button>
             <button  className="bg-transparent learn"><a id="blog" href="https://dev.to/cedsengine/building-a-qr-code-generator-onj">Latest blogs</a></button>
           
        </main>
    </div>
  )
}

export default Home