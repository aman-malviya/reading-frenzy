import React, {useState} from 'react'
import GeneralLink from './GeneralLink'
import firebase from '../fire'

function LatestTile(props){
    const [URL, setURL]=useState("")
    firebase.storage().ref().child('images/'+props.bg).getDownloadURL().then(url=>{
        setURL(url)
    })

    return(<div style={{'padding':'0 0 0 0'}}>
    <div className='latest-tile' style={{'backgroundImage':'url('+URL+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
    <div className='latest-blog-type'>
    <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101', 'opacity':'0.6','letterSpacing':'0.5px'}}>{props.category}</h6>
    </div>
    </div>
    <div className='latest-blog-described'>
    <h2 style={{'fontFamily':'"EB Garamond", serif'}}>{props.title}</h2>
    <p style={{'padding':'2% 0', 'opacity':'0.9', 'letterSpacing':'0.7px'}}>{props.content}</p>
    <GeneralLink text='Continue Reading.....'  href={'/posts/'+props.id} />
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)', 'marginTop':'8%'}}></hr>
    <p style={{'fontFamily':'"EB Garamond", serif', 'opacity':"0.8", 'display':'inline', 'fontSize':'0.8rem'}}>{props.author}<span style={{'float':'right'}}>{props.date}</span></p>
    </div>
    </div>)
}
export default LatestTile;