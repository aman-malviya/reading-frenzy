import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CarouselWindow from './CarouselWindow'
import Header from './Header'
import Footer from './Footer'
import FeaturedTile from './FeaturedTile'
import LikedTile from './LikedTile'
import SocialMedia from './SocialMedia'
import DownCategoryPanel from './DownCategoryPanel'
import posts from '../posts'
import firebase from '../fire'

function ParticularCategoryPage() {
    let {category}=useParams();
    let [showPosts, setShowPosts]=useState([])
    useEffect(()=>{
        firebase.firestore().collection("Blogs").where("category", '==', category).onSnapshot(snapshot=>{
            let categoryPosts=[]
            snapshot.docs.forEach(doc=>categoryPosts.push(doc.data()))
            setShowPosts(categoryPosts)
        })
    },[])
    return(<div>
        <Header />
        <div style={{'padding':'0 5%'}}>
            <CarouselWindow category={posts[0].postCategory} title={posts[0].postTitle} content={posts[1].postContent.substring(0,200)}  background="Assets/2.jpg" linkDisplay='none' />
            <br />
            <br />
            <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#000', 'opacity':'0.6', 'letterSpacing':'0.5px'}}>Category</h6>
            <h1 style={{'fontFamily':'"EB Garamond", serif'}}>{category.charAt(0).toUpperCase()+category.slice(1)}</h1>
            <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                        {showPosts.map(post=>{
                            return <div className='col-lg-6'><FeaturedTile title={post.title} category={post.category} bg='Assets/2.jpg' /></div>
                        })}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Latest of {category.charAt(0).toUpperCase()+category.slice(1)}</h2>
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