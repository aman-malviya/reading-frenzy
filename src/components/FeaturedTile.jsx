import React from 'react'
import GeneralLink from './GeneralLink'

function FeaturedTile(props){
    return (<div><div className='featured-tile' style={{'background':'url('+props.bg+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
     <div className='featured-blog-type'>
     <h6 style={{'text-transform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101','opacity':'0.6','letter-spacing':'0.5px'}}>{props.category}</h6>
     </div>
    </div>
    <div className='featured-blog-described'>
    <h2 style={{'fontFamily':'"EB Garamond", serif', 'padding':'2% 0'}}>{props.title}</h2>
    <GeneralLink text='Read More' href='/posts/post' />
    </div>
    </div>)
}
export default FeaturedTile;