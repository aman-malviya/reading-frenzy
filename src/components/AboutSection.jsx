import React, {useEffect, useState} from 'react'
import LikedTile from './LikedTile'
import SocialMedia from './SocialMedia'
import DownCategoryPanel from './DownCategoryPanel'
import firebase from '../fire'


export default function AboutSection(){
    const [blogList, setBlogList]=useState([]);
    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("editorChoice", '==', 'yes').limit(5).onSnapshot(snapshot=>{
         const blogs=[]
         snapshot.docs.forEach(doc=>{
           blogs.push([doc.id,doc.data()])
         })
        setBlogList(blogs)
       })
    },[]);

    return(<div className='about-section'>
      <h2 style={{'fontFamily':'"EB Garamond",serif'}}>About Us</h2>
      <div className="about-img">
        <img alt='logo-img' width='100%' src='Assets/logo.png' />
      </div>
      <p style={{'textAlign':'center', 'padding':'5%', 'letterSpacing':'0.5px','font-family':"'Karla', sans-serif"}}>
        Quizzers' Club MANIT (QCM) is the official quizzing club of Maulana Azad Institute of Technology, Bhopal. QCM is formed by a bunch of quizzing prodigies of MANIT in Feb 2013. We are a group of enthusiastic quizzers, executives, designers and web developers. The purpose of the society is to promote quizzing, group discussion, debate to increase the general awareness in the student community.
      </p>
      <br />  
      <br />
      {/*<h2 style={{'fontFamily':'"EB Garamond",serif'}}>Liked Posts</h2>
      <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
      <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
      <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
      <LikedTile title={posts[1].postTitle} bg={posts[1].postBg} />
      <LikedTile title={posts[0].postTitle} bg={posts[0].postBg} />
      <br />*/}
      <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Editor's Choice</h2>
      {blogList.map((blog, i)=>{
        return <a style={{'color':'#000', 'textDecoration':'none'}} href={'/posts/'+blog[0]}>
          <LikedTile num={i+1} title={blog[1].title} bg={blog[1].time} />
        </a>
      })}
      <br />
      <br />
      <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Follow Us</h3>
      <SocialMedia border='1px solid rgba(0,0,0,0.8)' />
      <br />
      <br />
      <h3 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h3>
      <DownCategoryPanel />
    </div>)
}
