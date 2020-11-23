import React from 'react'
import {ArrowForward} from '@material-ui/icons'
import GeneralLink from './GeneralLink'

function CarouselWindow(props){
    const carouselWindowStyle={
        'background': 'url('+ props.background +')',
        'backgroundSize':'cover',
        'backgroundPosition':'center'
    }
    return (<div style={carouselWindowStyle} >
    <div className="shade">
    <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#eeeeee', 'opacity':'0.6', 'letterSpacing':'0.5px'}}>{props.category}</h6>
    <h1 style={{'fontFamily': "'EB Garamond', serif", 'color':'#4ecca3'}}>{props.title}</h1>
    <h5 style={{'fontFamily':"'Karla', sans-serif"}}>{props.content}</h5><br />
    <GeneralLink text="Keep Reading" href='/posts/post' />
    </div>
    </div>)
}

export default CarouselWindow;