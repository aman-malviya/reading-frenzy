import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LatestTile from './LatestTile'
import posts from '../posts'
import {useParams} from 'react-router-dom'

function ParticularPostPage(){
    let {id} =useParams();
    return(<div>
    <Header />
    <div style={{'padding':'0 5%'}}>
    <LatestTile author={posts[0].postAuthor} date={posts[0].postDate} bg='/Assets/6.jpg' category={posts[0].postCategory} title={posts[0].postTitle} content={posts[0].postContent.substring(0,200)} />
    </div>
    
    <Footer />
    </div>)
}
export default ParticularPostPage;