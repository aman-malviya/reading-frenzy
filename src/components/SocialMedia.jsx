import React from 'react'
import SocialMediaLink from './SocialMediaLink'

function SocialMedia(props){
    return(<div className='social-media'>
    <ul className='d-flex' style={{'listStyle':'none'}}>
    <li><SocialMediaLink border={props.border} bg={props.bg} class='fab fa-facebook-f' /></li>
    <li><SocialMediaLink border={props.border} bg={props.bg} class='fab fa-instagram' /></li>
    <li><SocialMediaLink border={props.border} bg={props.bg} class='fab fa-linkedin-in' /></li>
    <li><SocialMediaLink border={props.border} bg={props.bg} class='fab fa-twitter' /></li>
    </ul>
    </div>)
}
export default SocialMedia;