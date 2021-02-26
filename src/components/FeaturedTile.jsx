import React, {useState} from 'react'
import GeneralLink from './GeneralLink'
import firebase from '../fire'

function FeaturedTile(props){
    const [URL, setURL]=useState("")
    firebase.storage().ref().child('images/'+props.bg).getDownloadURL().then(url=>{
        setURL(url)
    })

    return (<div><div className='featured-tile' style={{'backgroundImage':'url('+URL+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
     <div className='featured-blog-type'>
     <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101','opacity':'0.6','letter-spacing':'0.5px'}}>{props.category}</h6>
     </div>
    </div>
    <div className='featured-blog-described'>
    <h2 style={{'fontFamily':'"EB Garamond", serif', 'padding':'2% 0'}}>{props.title}</h2>
    <GeneralLink text='Read More' href={'/posts/'+props.id} />
    </div>
    </div>)
}
export default FeaturedTile;