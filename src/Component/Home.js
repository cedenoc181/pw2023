import React from 'react'
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className='home bg-dark w-100 vh-100'>
        <Nav />
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href='#'>
                  <i className='bi bi-github text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                <li><a href='#'>
                  <i className='bi bi-linkedin text-secondary' style={{fontSize: '25px'}}> </i>
                  </a></li>
                <li><a href='#'>
                  <i className='bi bi-envelope-at text-secondary' style={{fontSize: '25px'}}></i>
                  </a></li>
                <li><a href='#'>
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
              strings: ['I am a Full Stack Software Engineer.', 'I use to fix people, Now I fix code!']
            }}
            />
             </h2>
             <p className='details'>
             As a Full-Stack Software Engineer driven by fervor for crafting innovative, high-impact applications,<br />
              I am passionate about using my skills to positively impact people's lives and make a difference in the world.
             </p>
             <button className="bg-transparent"> Check out More</button>
        </main>
    </div>
  )
}

export default Home