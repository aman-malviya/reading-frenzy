import React from 'react'
import {Link} from '@material-ui/core'

function SocialMediaLink(props){
    return(<div className='social-media-link'>
    <Link href='#'>
    <span className='d-flex justify-content-center align-items-center' style={{ 'height':'35px', 'width':'35px', 'border':props.border, 'border-radius':'50%', 'fontSize':'0.9rem', 'backgroundColor':props.bg}}>
    <i>
    <i class={props.class}></i>
    </i>
    </span>
    </Link>
    </div>)
}
export default SocialMediaLink;

// , 'transform':'rotate(45deg)'
//  style={{'transform':'rotate(-45deg)'}}