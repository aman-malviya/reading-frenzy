import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SocialMedia from './SocialMedia'

function Brand(){
    return (<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <SocialMedia />
  <a class="navbar-brand" href="#">Quizzers' Club MANIT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <MenuRoundedIcon />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent2">
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