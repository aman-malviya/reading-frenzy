import React from 'react'
import {Link} from '@material-ui/core'

function FeaturedTile(props){
    return (<div><div className='featured-tile' style={{'background':'url('+props.bg+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
     <div className='featured-blog-type'>
     <h6 style={{'text-transform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101','opacity':'0.6','letter-spacing':'0.5px'}}>{props.category}</h6>
     </div>
    </div>
    <div className='featured-blog-described'>
    <h2 style={{'fontFamily':'"EB Garamond", serif', 'padding':'2% 0'}}>{props.title}</h2>
    <Link style={{'color':'#4ecca3'}} href='#'>See Full Post</Link>
    </div>
    </div>)
}
export default FeaturedTile;