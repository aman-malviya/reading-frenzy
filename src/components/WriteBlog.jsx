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
    const [rating, setRating]=useState("");


    const publishTheBlog=()=>{
        firebase.firestore().collection("Blogs").doc().set({
            category:category,
            editorChoice:editorChoice,
            featured:featured,
            author:author,
            title:title,
            content:content,
            timeStamp:new Date().getTime(),
            rating:+rating
        })
        .then(() => {
            document.getElementById("message").style.visibility="visible"
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'#38b000'}} class="fa fa-check-circle" aria-hidden="true"></i> Blog published</p>)
            setTimeout(() => {
                setMessage("")
                document.getElementById("message").style.visibility="hidden"
            }, 3000);
        })
        .catch((error) => {
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'red'}} class="fad fa-exclamation-circle"></i> Some error has occured</p>)
            setTimeout(() => {
                setMessage("")
            }, 3000);
        });
        // const blogRef=firebase.database().ref("Blog");
        // const blog={
        //     category,
        //     editorChoiceOrNot,
        //     featuredOrNot,
        //     author,
        //     title,
        //     content
        // }
        // blogRef.push(blog, (err)=>{
        //     if(err){
        //         console.log(err);
        //         setMessage("Some error has occured.")
        //         setTimeout(() => {
        //             setMessage("");
        //         }, 3000);
        //     }else{
        //         setMessage("Question successfully saved to the Database.");
        //         setTimeout(() => {
        //             setMessage("");
        //         }, 3000);
        //     }
        // });
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
                <option value="Travel">Travel</option>
                <option value="Science">Science</option>
                <option value="Recipes">Recipes</option>
                <option value="quizzing">Quizzing</option>
                </select>
                </div>
                <div className="form-group">
                <label>Mention in the Editor's Choice?</label>
                <select value={editorChoice} onChange={e=>setEditorChoice(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Mention in the Featured?</label>
                <select value={featured} onChange={e=>setFeatured(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
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
                <input value={rating} onChange={e=>setRating(e.target.value)} type='number' style={{'width':'100%', 'background':'none'}} placeholder="How much would you rate this blog out of 10?" max="10" min="0" required />
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



