import React, {useEffect, useState} from 'react'
import CarouselWindow from './CarouselWindow'
import {ArrowForward, ArrowBack} from '@material-ui/icons'
import posts from '../posts'
import firebase from '../fire'

function Carousel(props){

  const [blogList, setBlogList]=useState([]);
    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("carousel", '==', 'yes').limit(3).onSnapshot(snapshot=>{
         let blogs=[]
         snapshot.docs.map(doc=>{
           blogs.push([doc.id,doc.data()])
         })
         setBlogList(blogs)
       })
    },[]);
    // firebase.storage().ref().child('images/').listAll().then((result)=>{
    //   result.items.forEach((imageRef)=>{
    //     console.log(imageRef.name)
    //     imageRef.getDownloadURL().then(url=>{
    //       console.log(url)
    //     })
    //   })
    // })
    // const [URL, setURL]=useState([])
      
    
    return (<div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-pause='hover'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div style={{'backgroundImage':'url(Assets/bulb.png)', 'backgroundSize':'cover', 'backgroundPosition':'center', 'minHeight':'401px'}}>
        <CarouselWindow category="Quizzers' Club MANIT" title="Welcome to the Quizzers' Club MANIT's Blog" content="" linkDisplay='none' />
      </div>
    </div>
    {blogList.map(blog=>{
        return <div className="carousel-item">
            <CarouselWindow category={blog[1].category} title={blog[1].title} content={blog[1].content.substring(0,100)+'...'} id={blog[0]} bg={blog[1].time} />
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