import React, {useState, useEffect} from 'react'
import FeaturedTile from './FeaturedTile'
import firebase from '../fire'

export default function Featured(){
    const [blogList, setBlogList]=useState([]);

    useEffect(()=>{
       firebase.firestore().collection("Blogs").where("featured", '==', 'yes').limit(3).onSnapshot(snapshot=>{
         const blogs=[]
         snapshot.docs.forEach(doc=>{
           blogs.push([doc.id,doc.data()])
         })
        setBlogList(blogs)
       })
    },[]);

    return(<div className='featured-section'>
      <h1 style={{'fontFamily':'"EB Garamond", serif'}}>Featured</h1>
      <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
      <div className="row row-eq-height">
        {blogList.map(blog=>{
          return <div className='col-lg col-md-6'><FeaturedTile title={blog[1].title} category={blog[1].category} id={blog[0]} bg={blog[1].time} /></div>
        })}
      </div>
    </div>)
}
