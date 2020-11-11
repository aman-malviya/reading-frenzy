import React from 'react'
import SocialMediaLink from './SocialMediaLink'

function SocialMedia(){
    return(<div className='social-media'>
    <ul className='d-flex' style={{'listStyle':'none'}}>
    <li><SocialMediaLink class='fab fa-facebook-f' /></li>
    <li><SocialMediaLink class='fab fa-instagram' /></li>
    <li><SocialMediaLink class='fab fa-linkedin-in' /></li>
    <li><SocialMediaLink class='fab fa-twitter' /></li>
    </ul>
    </div>)
}
export default SocialMedia;