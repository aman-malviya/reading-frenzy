import React from 'react'
import LikedTile from './LikedTile'
import posts from '../posts'
import SocialMedia from './SocialMedia'
import DownCategoryPanel from './DownCategoryPanel'


function AboutSection(){
    return(<div className='about-section'>
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>About Us</h2>
    <div className="about-img">
    <img alt='logo-img' width='100%' src='Assets/2.jpg' />
    </div>
    <p style={{'textAlign':'center', 'padding':'5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet</p>
    <br />
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Liked Posts</h2>
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <br />
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Editor's Choice</h2>
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <br />
    <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Follow Us</h3>
    <SocialMedia border='1px solid rgba(0,0,0,0.8)' />
    <br />
    <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h3>
    <DownCategoryPanel />
    </div>)
}

export default AboutSection;