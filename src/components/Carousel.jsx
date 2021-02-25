import React, {useEffect, useState} from 'react'
import CarouselWindow from './CarouselWindow'
import {ArrowForward, ArrowBack} from '@material-ui/icons'
import posts from '../posts'
import firebase from '../fire'

function Carousel(props){

  const [blogList, setBlogList]=useState([]);
    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("category", '==', 'quizzing').onSnapshot(snapshot=>{
         snapshot.docs.forEach(doc=>{
           const blogs=[]
           blogs.push(doc.data())
           setBlogList(blogs)
         })
       })
    },[]);
    return (<div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-pause='hover'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <CarouselWindow category="Reading Frenzy" title="Welcome to the Reading Frenzy Blog" content="" background="Assets/6.jpg" />
    </div>
    {blogList.map(blog=>{
        return <div className="carousel-item">
            <CarouselWindow category={posts[2].postCategory} title={posts[2].postTitle} content={posts[2].postContent.substring(0,200)}  background="Assets/4.jpg" />
        </div>
    })}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <ArrowBack style={{'fontSize':'30', 'color':'#4ecca3'}} />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <ArrowForward style={{'fontSize':'30', 'color': '#4ecca3'}} />
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>)
}

export default Carousel;