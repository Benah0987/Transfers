import React from 'react'

export default function Navbar ()  {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light mb-6">
  <div class="container-fluid">
    <h2 class="navbar-brand mx-5 fs-8 fw-bold" href="#">Transfers</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
      <ul class="navbar-nav mb-2 mb-lg-0 mx-5">
        
        <li class="nav-item">
          <a class="nav-link mx-2 fs-5"  href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 fs-5" href="#Teams">Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 fs-5" href="#Transfer">Transfer</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
