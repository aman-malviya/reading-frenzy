import React from 'react'
import SocialMedia from './SocialMedia'

export default function Brand(){
    return (<div>
      <nav class="navbar navbar-expand-lg brand">
        <div className='social-media-hide'>
          <SocialMedia border='1px solid rgba(0,0,0,0.8)' />
        </div>
        <a className="navbar-brand" href="/">
          <span style={{'font-family': "'Roboto Slab', serif", 'fontWeight':'500'}}>
            Quizzers' Club
          </span>
          <br />
          MANIT
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>)
}