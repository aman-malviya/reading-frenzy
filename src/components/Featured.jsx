import React, {useState, useEffect} from 'react'
import FeaturedTile from './FeaturedTile'
import posts from '../posts'
import firebase from '../fire'

function Featured(){
    const [blogList, setBlogList]=useState([]);
    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("featured", '==', 'yes').onSnapshot(snapshot=>{
         snapshot.docs.forEach(doc=>{
           const blogs=[]
           blogs.push(doc.data())
           setBlogList(blogs)
         })
       })
    },[]);
    console.log(blogList)
    return(<div className='featured-section'>
    <h1 style={{'fontFamily':'"EB Garamond", serif'}}>Featured</h1>
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
    <div className="row">
        <div className='col-lg col-md-6'><FeaturedTile title={posts[0].postTitle} category={posts[0].postCategory} bg='Assets/3.jpg' /></div>
        <div className='col-lg col-md-6'><FeaturedTile title={posts[1].postTitle} category={posts[1].postCategory} bg='Assets/4.jpg' /></div>
        <div className='col-lg col-md-6'><FeaturedTile title={posts[2].postTitle} category={posts[2].postCategory} bg='Assets/5.jpg' /></div>
    </div>
    </div>)
}
export default Featured;