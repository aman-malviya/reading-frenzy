import React from 'react'
import {Link} from '@material-ui/core'
import {ThumbUpAlt} from '@material-ui/icons'

function LatestTile(props){
    return(<div>
    <div className='latest-tile' style={{'background':'url('+props.bg+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
    <div className='latest-blog-type'>
    <h6 style={{'text-transform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101', 'opacity':'0.6','letter-spacing':'0.5px'}}>{props.category}</h6>
    </div>
    </div>
    <div className='latest-blog-described'>
    <h2 style={{'font-family':'"EB Garamond", serif'}}>{props.title}</h2>
    <h6 style={{'padding':'2% 0', 'opacity':'0.9', 'letter-spacing':'0.7px'}}>{props.content}</h6>
    <Link style={{'color':'#4ecca3'}} href='#'>See More</Link>
    <hr style={{'border':'0', 'border-top':'1px solid rgba(0,0,0,0.3)', 'margin-top':'8%'}}></hr>
    <p style={{'font-family':'"EB Garamond", serif', 'opacity':"0.8", 'display':'inline'}}>{props.author} | {props.date}</p>
    <ThumbUpAlt style={{'float':'right', 'color':'rgba(0,0,0,0.3)'}} />
    </div>
    </div>)
}
export default LatestTile;