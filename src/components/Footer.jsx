import React from 'react'
import SocialMedia from './SocialMedia'
import {Copyright} from '@material-ui/icons'

let date=new Date();
let year=date.getFullYear();
function Footer(){
    return(<div style={{'backgroundColor':'#000', 'padding':'2% 0'}}>
  <a style={{"text-align":'center', 'color':'#fff'}} class="navbar-brand" href="/"><span>RF</span></a>
    <div className="d-flex justify-content-center">
    <a style={{'color':'#fff', 'padding':'1% 1.2%'}} href="/categories">Categories</a>
    <a style={{'color':'#fff', 'padding':'1% 1.2%'}} href="/about">About Us</a>
    <a style={{'color':'#fff', 'padding':'1% 1.2%'}} href="/contact">Contact Us</a>
    </div>
    <div style={{'transform':'translateX(10px)'}} className='d-flex justify-content-center'>
    <SocialMedia bg="#fff" border='1px solid rgba(255,255,255,1)' />
    </div>
    <p style={{'color':'#fff', 'textAlign':'center', 'fontFamily':'"Karla", sans-serif;', 'opacity':'0.8', 'fontSize':'0.9rem'}}><Copyright /> Reading Frenzy by Aman Malviya {year}</p>
    </div>)
}
export default Footer;