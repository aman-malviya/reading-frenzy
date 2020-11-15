import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


function Navbar(){
    return(<div className='d-flex justify-content-center'>
    <nav class="navbar navbar-expand-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuRoundedIcon />

      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/life-style">
              Life Style
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/travel">
              Travel
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/recipes">
              Recipes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/science">
              Science
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/categories">
              Categories
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
    </div>)
}

export default Navbar;