import React, {useState} from 'react'
import Brand from './Brand'
import Footer from './Footer'
import firebase from '../fire'



function WriteBlog() {
    const [message, setMessage]=useState("");
    const [category, setCategory]=useState("");
    const [featured, setFeatured]= useState("");
    const [editorChoice, setEditorChoice]= useState("");
    const [author, setAuthor]=useState("");
    const [title, setTitle]=useState("");
    const [content, setContent]=useState("");
    const [carousel, setCarousel]=useState("");
    const [trending, setTrending]=useState("");
    const [image, setImage]=useState("");


    const publishTheBlog=()=>{
        let time=new Date().getTime()
        firebase.firestore().collection("Blogs").doc().set({
            category:category,
            editorChoice:editorChoice,
            featured:featured,
            author:author,
            title:title,
            content:content,
            date:new Date().toDateString(),
            carousel:carousel,
            trending:trending,
            time:time
        })
        .then(() => {
            document.getElementById("message").style.visibility="visible"
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}>Uploading Image ...</p>)
        })
        .catch((error) => {
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'red'}} class="fad fa-exclamation-circle"></i> Some error has occured</p>)
            setTimeout(() => {
                setMessage("")
            }, 3000);
        });
        const img=document.getElementById("photo").files[0]
        var metadata = {
            contentType: img.type,
        };
        firebase.storage().ref().child('images/'+time).put(img, metadata).then((snapshot)=>{
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'#38b000'}} class="fa fa-check-circle" aria-hidden="true"></i> Blog published</p>)
            setTimeout(() => {
                setMessage("")
                document.getElementById("message").style.visibility="hidden"
            }, 3000);
            console.log(snapshot.ref.fullPath)
        })
    }
    
    return (<div>
    <Brand />
    <div style={window.innerWidth<500?{'padding':'0 5%'}:{'padding':'0 10%'}}>
    <div className="contact-panel">
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Write a Blog</h1>
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
    

<div className="form-group">
                <label>Blog Category</label>
                <select value={category} onChange={e=>setCategory(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select a Category</option>
                <option value="life-style">Life Style</option>
                <option value="travel">Travel</option>
                <option value="science">Science</option>
                <option value="recipes">Recipes</option>
                <option value="quizzing">Quizzing</option>
                </select>
                </div>
                <div className="form-group">
                <label>Show in Editor's Choice?</label>
                <select value={editorChoice} onChange={e=>setEditorChoice(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Show in Featured?</label>
                <select value={featured} onChange={e=>setFeatured(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Show in Carousel?</label>
                <select value={carousel} onChange={e=>setCarousel(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Show in Trending?</label>
                <select value={trending} onChange={e=>setTrending(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <br />
                <div className="form-group">
                <input value={author} onChange={e=>setAuthor(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Author" required />
                </div>
                <div className="form-group">
                <input value={title} onChange={e=>setTitle(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Title" required />
                </div>
                <div className="form-group">
                <textarea value={content} onChange={e=>setContent(e.target.value)} style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Content" required rows='3' />
                </div>
                <div className="form-group">
                <input id="photo" value={image} onChange={e=>setImage(e.target.value)} type='file' style={{'width':'100%', 'background':'none'}} placeholder="Title" required />
                </div>
                <br />
                <button onClick={publishTheBlog} className="contact-form-button">Publish</button>
                <div id="message" style={{'position':'fixed', 'bottom':'20px', 'left':'20px', 'backgroundColor':'#fff','display':'flex', 'justifyContent':'center', 'alignItems':'center', 'visibility':'hidden', 'borderRadius':'8px', 'border':'2px solid #a7aaa4'}}>
                    {message}
                </div>
        </div>
    </div>
    <br />
    <Footer />
    </div>)
}
export default WriteBlog;



