import React from 'react'
import SocialMedia from './SocialMedia'

function Brand(){
    return (<div>
<nav class="navbar navbar-expand-lg brand">
  <SocialMedia border='1px solid rgba(0,0,0,0.8)' />
  <a class="navbar-brand" href="/"><span>RF</span><br />Reading Frenzy</a>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact Us</a>
      </li>
     
    </ul>
  </div>
</nav>

    </div>)
}

export default Brand;