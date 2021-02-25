import React from 'react'
import GeneralLink from './GeneralLink'
import {ThumbUpAlt} from '@material-ui/icons'

function LatestTile(props){
    return(<div style={{'padding':'0 0 0 0'}}>
    <div className='latest-tile' style={{'background':'url('+props.bg+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
    <div className='latest-blog-type'>
    <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101', 'opacity':'0.6','letterSpacing':'0.5px'}}>{props.category}</h6>
    </div>
    </div>
    <div className='latest-blog-described'>
    <h2 style={{'fontFamily':'"EB Garamond", serif'}}>{props.title}</h2>
    <p style={{'padding':'2% 0', 'opacity':'0.9', 'letterSpacing':'0.7px'}}>{props.content}</p>
    <GeneralLink text='Continue Reading.....'  href='/posts/post' />
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)', 'marginTop':'8%'}}></hr>
    <p style={{'fontFamily':'"EB Garamond", serif', 'opacity':"0.8", 'display':'inline', 'fontSize':'0.8rem'}}>{props.author} | {props.date}</p>
    <ThumbUpAlt style={{'float':'right',  'color':'rgba(0,0,0,0.3)'}} />
    </div>
    </div>)
}
export default LatestTile;