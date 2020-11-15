import React from 'react'
import LatestTile from './LatestTile'
import posts from '../posts'

function Latest(){
    return(<div>
    <h1 style={{'font-family':'"EB Garamond", serif'}}>Latest</h1>
    <hr style={{'border':'0', 'border-top':'1px solid rgba(0,0,0,0.3)'}} />
    <div className='latest-section'>
    <LatestTile author={posts[0].postAuthor} date={posts[0].postDate} bg='Assets/6.jpg' category={posts[0].postCategory} title={posts[0].postTitle} content={posts[0].postContent.substring(0,200)} />
    <LatestTile author={posts[1].postAuthor} date={posts[1].postDate} bg='Assets/1.jpg' category={posts[1].postCategory} title={posts[1].postTitle} content={posts[1].postContent.substring(0,200)} />
    <LatestTile author={posts[1].postAuthor} date={posts[1].postDate} bg='Assets/2.jpg' category={posts[1].postCategory} title={posts[1].postTitle} content={posts[1].postContent.substring(0,200)} />
    </div>
    </div>)
}
export default Latest;