import React from 'react'
import CarouselWindow from './CarouselWindow'
import {ArrowForward, ArrowBack} from '@material-ui/icons'
import posts from '../posts'

function Carousel(props){
 
    return (<div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <CarouselWindow category={posts[0].postCategory} title={posts[0].postTitle} content={posts[0].postContent.substring(0,200)} background="Assets/6.jpg" />
    </div>
    <div class="carousel-item">
      <CarouselWindow category={posts[1].postCategory} title={posts[1].postTitle} content={posts[1].postContent.substring(0,200)}  background="Assets/4.jpg" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <ArrowBack style={{'fontSize':'30', 'color':'#4ecca3'}} />
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <ArrowForward style={{'fontSize':'30', 'color': '#4ecca3'}} />
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>)
}

export default Carousel;