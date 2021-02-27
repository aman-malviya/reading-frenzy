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
    let [current, setCurrent]=useState()

    useEffect(()=>{
        firebase.firestore().collection("Blogs").where("category", '==', category).onSnapshot(snapshot=>{
            let categoryPosts=[]
            snapshot.docs.forEach(doc=>categoryPosts.push([doc.id,doc.data()]))
            setShowPosts(categoryPosts)
        })
    },[])
    const [blogList, setBlogList]=useState([])
    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("category", '==', category).where("trending", '==', 'yes').limit(5).onSnapshot(snapshot=>{
         const blogs=[]
         snapshot.docs.forEach(doc=>{
           blogs.push([doc.id,doc.data()])
         })
        if(blogs.length){
            setCurrent(<CarouselWindow category={blogs[0][1].category} title={blogs[0][1].title} content={blogs[0][1].content.substring(0,100)+'...'} id={blogs[0][0]} bg={blogs[0][1].time} />)
        }
        setBlogList(blogs)
       })
    },[]);
    return(<div>
        <Header />
        <div style={{'padding':'0 5%'}}>
            {current}
            <br />
            <br />
            <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#000', 'opacity':'0.6', 'letterSpacing':'0.5px'}}>Category</h6>
            <h1 style={{'fontFamily':'"EB Garamond", serif'}}>{category.charAt(0).toUpperCase()+category.slice(1)}</h1>
            <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                        {showPosts.map(post=>{
                            return <div className='col-lg-6'><FeaturedTile title={post[1].title} category={post[1].category} id={post[0]} bg={post[1].time} /><br /></div>
                        })}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Trending in {category.charAt(0).toUpperCase()+category.slice(1)}</h2>
                    {blogList.map((blog,i)=>{
                        return <a href={'/posts/'+blog[0]} style={{'color':'#000', 'textDecoration':'none'}}><LikedTile num={i+1} title={blog[1].title} bg={blog[1].time} /></a>
                    })}
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