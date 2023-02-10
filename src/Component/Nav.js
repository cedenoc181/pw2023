import React from 'react'
import './Nav.css'
import 'bootstrap/js/dist/collapse'

function Nav() {
  return (
    <div className="container">
<nav class="navbar navbar-expand-md bg-transparent navbar-dark">
  <a class="navbar-brand" href="#">Ced Dev</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><span>01. </span>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>02. </span>Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>03. </span>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>04. </span>Contact</a>
      </li>
      <li class="nav-item">
        <button className='bg-transparent'>Resume</button>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Nav


