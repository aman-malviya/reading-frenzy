import React, {useState} from 'react'
import GeneralLink from './GeneralLink'
import firebase from '../fire'

export default function CarouselWindow(props){
    const [URL, setURL]=useState("")

    firebase.storage().ref().child('images/'+props.bg).getDownloadURL().then(url=>{
        setURL(url)
    })
    const carouselWindowStyle={
        'backgroundImage': 'url('+URL+')',
        'backgroundSize':'cover',
        'backgroundPosition':'center',
    }
    return (<div style={carouselWindowStyle} >
        <div className="shade d-flex justify-content-center align-items-center" style={{'minHeight':'450px'}}>
            <div>
                <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#eeeeee', 'opacity':'0.6', 'letterSpacing':'0.5px'}}>{props.category}</h6>
                <h1 style={{'fontFamily': "'EB Garamond', serif", 'color':'#4ecca3'}}>{props.title}</h1>
                <h5 style={{'fontFamily':"'Karla', sans-serif"}}>{props.content}</h5><br />
                {props.linkDisplay==='none'?"":<GeneralLink text="Keep Reading" href={'/posts/'+props.id} />}
            </div>
        </div>
    </div>)
}