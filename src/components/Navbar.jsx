import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


function Navbar(){
    return(<div className='d-flex justify-content-center'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link hvr-underline-reveal" href="/home">
              Life Style
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/about">
              Travel
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/contact">
              Recipes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/compose">
              Science
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-underline-reveal" href="/cat">
              Categories
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link hvr-underline-reveal dropdown-toggle "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item dropdown-link-1 hvr-icon-wobble-horizontal"
                href="/categories/physics"
              >
                <i class="fal fa-atom fa-2x"></i>Physics
              </a>

              <a
                class="dropdown-item hvr-icon-wobble-horizontal"
                href="/categories/facts"
              >
                <i class="fas fa-head-side-brain fa-2x"></i>Facts
              </a>
            </div>
          </li>
          
          
        </ul>
      </div>
    </nav>
    </div>)
}

export default Navbar;