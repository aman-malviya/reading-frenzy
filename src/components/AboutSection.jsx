import React from 'react'
import LikedTile from './LikedTile'
import posts from '../posts'
import SocialMedia from './SocialMedia'
import {Link} from '@material-ui/core'

function AboutSection(){
    return(<div className='about-section'>
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>About Us</h2>
    <div className="about-img">
    <img width='100%' src='Assets/2.jpg' />
    </div>
    <p style={{'text-align':'center', 'padding':'5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet</p>
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
    <SocialMedia />
    <br />
    <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h3>
    <Link href=''>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Science
    </div>
    </Link>
    <Link href=''>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Recipes
    </div>
    </Link>
    <Link href=''>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)','color':'rgba(0,0,0,0.8)'}}>Life Style</div>
    </Link>
    <Link href=''>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Travel
    </div>
    </Link>
    </div>)
}

export default AboutSection;