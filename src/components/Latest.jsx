import React, {useState, useEffect} from 'react'
import LatestTile from './LatestTile'
import firebase from '../fire'

export default function Latest(){
    const [blogList, setBlogList]=useState([]);

    useEffect(()=>{
       firebase.firestore().collection("Blogs").limit(10).onSnapshot(snapshot=>{
         const blogs=[]
         snapshot.docs.forEach(doc=>{
           blogs.push([doc.id,doc.data()])
         })
        setBlogList(blogs)
       })
    },[]);

    return(<div>
      <h1 style={{'fontFamily':'"EB Garamond", serif'}}>Latest</h1>
      <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
      <div className='latest-section'>
        {blogList.map(blog=>{
          return <LatestTile author={blog[1].author} date={blog[1].date} bg={blog[1].time} category={blog[1].category} title={blog[1].title} content={blog[1].content.substring(0,100)+"..."} id={blog[0]} />  
        })}
      </div>
    </div>)
}