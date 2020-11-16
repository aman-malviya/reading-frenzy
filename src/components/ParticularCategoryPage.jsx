import React from 'react'
import {useParams} from 'react-router-dom'
import CarouselWindow from './CarouselWindow'
import Header from './Header'
import Footer from './Footer'
import FeaturedTile from './FeaturedTile'
import LikedTile from './LikedTile'
import SocialMedia from './SocialMedia'
import DownCategoryPanel from './DownCategoryPanel'
import posts from '../posts'

function ParticularCategoryPage() {
    let {category}=useParams();
    return(<div>
    <Header />
    <div style={{'padding':'0 5%'}}>
    <CarouselWindow category={posts[0].postCategory} title={posts[0].postTitle} content={posts[1].postContent.substring(0,200)}  background="Assets/2.jpg" linkDisplay='none' />
    <br />
    <br />
    <h6 style={{'text-transform':'upperCase', 'fontSize':'0.9rem', 'color': '#000', 'opacity':'0.6', 'letter-spacing':'0.5px'}}>Category</h6>
    <h1 style={{'font-family':'"EB Garamond", serif'}}>{category}</h1>
    <hr style={{'border':'0', 'border-top':'1px solid rgba(0,0,0,0.3)'}} />
    <div className='row'>
    <div className='col-lg-8'>
    <div className='row'>
    <div className='col-lg-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/2.jpg' /></div>
    <div className='col-lg-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/2.jpg' /></div>
    </div>
    <div className='row'>
    <div className='col-lg-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/2.jpg' /></div>
    <div className='col-lg-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/2.jpg' /></div>
    </div>
    </div>
    <div className='col-lg-4'>
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Latest of {category}</h2>
    <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
    <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
    <br />
    <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Follow Us</h3>
    <SocialMedia border='1px solid rgba(0,0,0,0.8)' />
    <br />
    <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h3>
    <DownCategoryPanel />
    </div>
    </div>
    </div>
    <Footer />
    </div>)
}
export default ParticularCategoryPage;