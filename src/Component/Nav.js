import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="container">
<nav class="navbar navbar-expand-md navbar-light bg-transparent">
  <a class="navbar-brand" href="#">Christian Cedeno</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
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


