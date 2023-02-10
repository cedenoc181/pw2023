import React from 'react'
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'

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
        <div className='amil-container'>
          <p></p>
        </div>
    </div>
  )
}

export default Home