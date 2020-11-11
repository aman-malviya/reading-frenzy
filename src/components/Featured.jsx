import React from 'react'
import FeaturedTile from './FeaturedTile'
import posts from '../posts'

function Featured(){
    return(<div className='featured-section'>
    <h1 style={{'font-family':'"EB Garamond", serif'}}>Featured</h1>
    <div className="row">
    <div className='col-lg col-md-6'><FeaturedTile title={posts[0].postTitle} category={posts[0].postCategory} bg='Assets/4.jpg' /></div>
    <div className='col-lg col-md-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/2.jpg' /></div>
    <div className='col-lg col-md-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/3.jpg' /></div>
    </div>
    </div>)
}
export default Featured;