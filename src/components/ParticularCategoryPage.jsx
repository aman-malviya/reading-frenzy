import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LatestTile from './LatestTile'
import posts from '../posts'
import {useParams} from 'react-router-dom'

function ParticularCategoryPage(){
    let {id} =useParams();
    return(<div>
    <Header />
    <br />
    <h1 style={{'font-family':'"EB Garamond", serif'}}>{id}</h1>
    <LatestTile author={posts[0].postAuthor} date={posts[0].postDate} bg='Assets/6.jpg' category={posts[0].postCategory} title={posts[0].postTitle} content={posts[0].postContent.substring(0,200)} />
    <Footer />
    </div>)
}
export default ParticularCategoryPage;