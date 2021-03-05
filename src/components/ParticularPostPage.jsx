import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import {useParams} from 'react-router-dom'
import firebase from '../fire'
import LikedTile from './LikedTile'

export default function ParticularPostPage(){

    let {id} =useParams();
    let [newBlog, setNewBlog]=useState([])
    let [blogList, setBlogList]=useState([])

    useEffect(()=>{
        firebase.firestore().collection("Blogs").doc(id).get().then(doc=>{
            setNewBlog(doc.data())
            firebase.firestore().collection("Blogs").where("author", '==', doc.data().author).onSnapshot(snapshot=>{
                const temp=[]
                snapshot.docs.map(doc=>{
                    if(doc.id !== id){
                        temp.push([doc.id, doc.data()])
                    }
                })
                setBlogList(temp)
            })
        })
    },[])

    const [URL, setURL]=useState("")
    firebase.storage().ref().child('images/'+newBlog.time).getDownloadURL().then(url=>{
        setURL(url)
    })

    return(<div>
        <Header />
        <div style={window.innerWidth<600?{'padding':'0'}:{'padding':'0 20%'}}>
            <div style={{'padding':'0 0 0 0'}}>
                <div className='latest-tile' style={{'backgroundImage':'url('+URL+')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
                    <div className='latest-blog-type'>
                        <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101', 'opacity':'0.6','letterSpacing':'0.5px'}}>        {newBlog.category}
                        </h6>
                    </div>
                </div>
                <div className='latest-blog-described'>
                    <h2 style={{'fontFamily':'"EB Garamond", serif'}}>{newBlog.title}</h2>
                    <p style={{'padding':'2% 0', 'opacity':'0.9', 'letterSpacing':'0.7px', 'whiteSpace':'pre-wrap', 'textAlign':'justify'}}>{newBlog.content}</p>
                    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)', 'marginTop':'8%'}}></hr>
                    <p style={{'fontFamily':'"EB Garamond", serif', 'opacity':"0.8", 'display':'inline', 'fontSize':'0.8rem'}}>{newBlog.author}<span style={{'float':'right'}}>{newBlog.date}</span></p>
                </div>
            </div>
        </div>
        <br />
        <div style={window.innerWidth<600?{'padding':'2% 0'}:{'padding':'2% 20%'}}>
            {blogList.length?<h4 style={{'fontFamily':'"EB Garamond", serif' ,'padding':'0 20px'}}>More from {newBlog.author}</h4>:<p></p>}
            {blogList.map((blog, i)=>{
                return  <a style={{'color':'#000', 'textDecoration':'none'}} href={'/posts/'+blog[0]}><LikedTile num={i+1} title={blog[1].title} bg={blog[1].time} /></a>
            })}
        </div>
        <Footer />
    </div>
    )
}