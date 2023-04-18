import React from 'react'
import './Nav.css'
import 'bootstrap/js/dist/collapse'

function Nav() {


  return (
    <div id='nav' className="container">
<nav class="navbar navbar-expand-md bg-transparent navbar-dark">
  <a class="navbar-brand" href="#home">Console.log (whoAmI);</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="#about"><span>01. </span>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#experience"><span>02. </span>Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects"><span>03. </span>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#microP"><span>04. </span>MicroProjects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact"><span>05. </span>Contact</a>
      </li>
      <li class="nav-item">
      <a class="btn btn-outline-secondary" role="button" href={require('../resume.pdf')} download='resume.pdf'>Resume</a>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Nav


