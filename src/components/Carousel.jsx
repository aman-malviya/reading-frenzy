import React, {useEffect, useState} from 'react'
import CarouselWindow from './CarouselWindow'
import {ArrowForward, ArrowBack} from '@material-ui/icons'
import posts from '../posts'
import firebase from '../fire'

function Carousel(props){

  const [blogList, setBlogList]=useState();
    useEffect(()=>{
       const blogRef=firebase.database().ref("Blog");
       blogRef.on("value", (snapshot)=>{
         const blogs=snapshot.val();
         const blogList=[];
         for(let id in blogs){
           blogList.push(blogs[id]);
         }
         console.log(blogList);
         setBlogList(blogList);
       })
    },[]);
    return (<div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-pause='hover'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <CarouselWindow category={posts[0].postCategory} title={posts[0].postTitle} content={posts[0].postContent.substring(0,200)} background="Assets/6.jpg" />
    </div>
    <div className="carousel-item">
      <CarouselWindow category={posts[1].postCategory} title={posts[1].postTitle} content={posts[1].postContent.substring(0,200)}  background="Assets/4.jpg" />
    </div>
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