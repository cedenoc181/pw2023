import React from 'react'
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Home() {
  return (
    <div className='home bg-dark w-100 vh-100'>
        <Nav />
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href='#'><i className='bi bi-github'> </i></a></li>
                <li><a href='#'><i className='bi bi-linkedin'> </i></a></li>
                <li><a href='#'><i className='bi bi-envelope-at'></i></a></li>
                <li><a href='#'><i className='bi bi-medium'></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Home