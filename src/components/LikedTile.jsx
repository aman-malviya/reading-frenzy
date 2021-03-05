import React, {useState} from 'react'
import firebase from '../fire'

export default function LikedTile(props){
    const [URL, setURL]=useState("")

    firebase.storage().ref().child('images/'+props.bg).getDownloadURL().then(url=>{
        setURL(url)
    })

    return(<div className='grid-container' style={{'margin-bottom':'3%'}}>
        <div className='grid-item d-flex align-items-center'>
            <span className='d-flex justify-content-center align-items-center' style={{ 'height':'30px', 'width':'30px', 'border':'1px solid rgba(0,0,0,0.8)', 'borderRadius':'3px', 'transform':'rotate(45deg)'}}><b style={{'transform':'rotate(-45deg)'}}>{props.num}</b></span>
        </div>
        <div className='grid-item d-flex align-items-center'>
            <h5 style={{'fontFamily':'"EB Garamond",serif', 'textAlign':'left'}}>{props.title}</h5>
        </div>
        <div className='grid-item d-flex align-items-center' style={{'justifyContent':'flex-end'}}>
            <div className='liked-img'>
                <img alt='' width='100%' src={URL} />
            </div>
        </div>
    </div>)
}