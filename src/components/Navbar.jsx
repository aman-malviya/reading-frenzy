import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


function Navbar(){
    return(<div className='d-flex justify-content-center'>
    <nav class="navbar navbar-expand-lg">
      <button
        style={{'backgroundColor':'#000', 'color':'#fff', 'margin':'auto'}}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuRoundedIcon />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/life-style">
              Life Style
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/travel">
              Travel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/technology">
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/science">
              Science
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/categories">
              Categories
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
    </div>)
}

export default Navbar;