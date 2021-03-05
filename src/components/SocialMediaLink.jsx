import React from 'react'
import {Link} from '@material-ui/core'

export default function SocialMediaLink(props){

    const socialMediaStyles={ 
        'height':'35px', 
        'width':'35px', 
        'border':props.border, 
        'borderRadius':'50%', 
        'fontSize':'0.9rem', 
        'backgroundColor':props.bg
    }

    return(<div className='social-media-link'>
        <Link href={props.url}>
            <span className='d-flex justify-content-center align-items-center' 
                style={socialMediaStyles}>
                <i>
                    <i class={props.class}></i>
                </i>
            </span>
        </Link>
    </div>)
}

