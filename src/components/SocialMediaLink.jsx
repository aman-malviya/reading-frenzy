import React from 'react'
import {Link} from '@material-ui/core'

function SocialMediaLink(props){
    return(<div className='social-media-link'>
    <Link href='#'>
    <span className='d-flex justify-content-center align-items-center' style={{ 'height':'35px', 'width':'35px', 'border':'1px solid rgba(0,0,0,0.8)', 'border-radius':'3px'}}>
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