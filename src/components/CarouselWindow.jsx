import React from 'react'
import {ArrowForward} from '@material-ui/icons'
import {Link} from '@material-ui/core'

function CarouselWindow(props){
    const carouselWindowStyle={
        'background': 'url('+ props.background +')',
        'backgroundSize':'cover',
        'backgroundPosition':'center'
    }
    return (<div style={carouselWindowStyle} >
    <div className="shade">
    <h6 style={{'text-transform':'upperCase', 'fontSize':'0.9rem', 'color': '#eeeeee', 'opacity':'0.6', 'letter-spacing':'0.5px'}}>{props.category}</h6>
    <h1 style={{'font-family': "'EB Garamond', serif", 'color':'#4ecca3'}}>{props.title}</h1>
    <h5 style={{'font-family':"'Karla', sans-serif"}}>{props.content}</h5><br />
    <Link class="keep-reading"
          href="/posts/<%= posts[i].blogTitle %>"
          >Keep Reading <ArrowForward style={{'fontSize':'20'}} /></Link>
    </div>
    </div>)
}

export default CarouselWindow;