import React, {useState} from 'react'
import Brand from './Brand'
import Footer from './Footer'
import firebase from '../fire'



function WriteBlog() {
    const [message, setMessage]=useState();
    const [category, setCategory]=useState();
    const [featuredOrNot, setFeaturedOrNot]= useState();
    const [editorChoiceOrNot, setEditorChoiceOrNot]= useState();
    const [author, setAuthor]=useState();
    const [title, setTitle]=useState();
    const [content, setContent]=useState();

    const handleCategory=(e)=>{
        setCategory(e.target.value);
    }
    const handleEditorChoice=(e)=>{
        setEditorChoiceOrNot(e.target.value);
    }
    const handleFeatured=(e)=>{
        setFeaturedOrNot(e.target.value);
    }
    const handleAuthor=(e)=>{
        setAuthor(e.target.value);
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleContent=(e)=>{
        setContent(e.target.value);
    }
    const publishTheBlog=()=>{
        const blogRef=firebase.database().ref("Blog");
        const blog={
            category,
            editorChoiceOrNot,
            featuredOrNot,
            author,
            title,
            content
        }
        blogRef.push(blog, (err)=>{
            if(err){
                console.log(err);
                setMessage("Some error has occured.")
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }else{
                setMessage("Question successfully saved to the Database.");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }
        });
    }
    
    return (<div>
    <Brand />
    <div style={window.innerWidth<500?{'padding':'0 5%'}:{'padding':'0 10%'}}>
    <div className="contact-panel">
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Write a Blog</h1>
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
    

<div className="form-group">
                <label>Blog Category</label>
                <select value={category} onChange={handleCategory} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="Life Style">Life Style</option>
                <option value="Travel">Travel</option>
                <option value="Science">Science</option>
                <option value="Recipes">Recipes</option>
                </select>
                </div>
                <div className="form-group">
                <label>Mention in the Editor's Choice?</label>
                <select value={editorChoiceOrNot} onChange={handleEditorChoice} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Mention in the Featured?</label>
                <select value={featuredOrNot} onChange={handleFeatured} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                </div>
                <br />
                <div className="form-group">
                <input value={author} onChange={handleAuthor} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Author" required />
                </div>
                <div className="form-group">
                <input value={title} onChange={handleTitle} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Title" required />
                </div>
                <div className="form-group">
                <textarea value={content} onChange={handleContent} style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Content" required rows='3' />
                </div>
                <br />
                <button onClick={publishTheBlog} className="contact-form-button">Publish</button>
                <p style={{'color':'green'}}>{message}</p>
        </div>
    </div>
    <br />
    <Footer />
    </div>)
}
export default WriteBlog;



