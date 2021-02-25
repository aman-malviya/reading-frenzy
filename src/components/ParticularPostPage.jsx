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
    <div style={{'padding':'0 10%'}}>
    <LatestTile author={posts[2].postAuthor} date={posts[2].postDate} bg='/Assets/6.jpg' category={posts[2].postCategory} title={posts[2].postTitle} content={posts[2].postContent} />
    </div>
    
    <Footer />
    </div>)
}
export default ParticularPostPage;