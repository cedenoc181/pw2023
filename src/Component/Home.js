import React from 'react'
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import Typewriter from 'typewriter-effect'



function Home() {

  return (
    <div id='home' className='home bg-dark'>
        <Nav />
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href='https://github.com/cedenoc181'>
                  <i className='bi bi-github text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                <li><a href='https://www.linkedin.com/in/christian-cedeno-249187124/'>
                  <i className='bi bi-linkedin text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                <li><a href='https://dev.to/cedsengine'>
                  <i className='bi bi-medium text-secondary' style={{fontSize: '25px'}}></i>
                  </a></li>
            </ul>
        </div>
        <div className='email-container'>
          <p>Christiancedenob.f@gmail.com</p>
        </div>
        <main>
          <div className='founder-pill'>
            <span className='pill-dot'></span>
            FOUNDER · SANDLOTPICKS.COM
          </div>
          <p className='hi-name'>Hi, my name is</p>
          <h1 className='text-white'>Christian Cedeno.</h1>
          <h2>
            <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 120,
              strings: [
                'I am the Founder of Sandlotpicks.com.',
                'I build AI/ML-powered sports prediction tools.',
                'Founder & Software Engineer.'
              ]
            }}
            />
             </h2>
             <p className='details'>
             I am the founder of <a className='inline-link' href='https://sandlotpicks.com'>Sandlotpicks.com</a>, a machine-learning platform that predicts<br />
              MLB batter and pitcher prop outcomes using historical game data, rolling metrics,<br />
              and gradient-boosted models. I build the product end-to-end — from the Python/FastAPI<br />
              prediction engine to the React frontend.
             </p>
             <button className="bg-transparent"><a className='learn' href="#projects">View Sandlotpicks </a></button>
             <button  className="bg-transparent learn"><a id="blog" href="#contact">Get in touch</a></button>
        </main>
    </div>
  )
}

export default Home
