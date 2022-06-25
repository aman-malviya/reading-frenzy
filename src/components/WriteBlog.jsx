import React, {useState, useEffect} from 'react'
import Brand from './Brand'
import Footer from './Footer'
import firebase from '../fire'
import {CircularProgress} from '@material-ui/core'
import {useLocation, useHistory} from "react-router-dom"

export default function WriteBlog() {
    const history=useHistory();
    const url=useLocation().search;
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
    const [render, setrender] = useState(false)
    
    //category fetch
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        const creds=new URLSearchParams(url);
        const id=creds.get("id");
        const pwd=creds.get("password");
        firebase.firestore().collection("Credentials").get().then(snapshot=>{
            snapshot.docs.map(doc=>{
                if(doc.data().ID === id && doc.data().PASSWORD === pwd){
                    setrender(true);
                }
            })
        })
        firebase.firestore().collection("Categories").onSnapshot(snapshot=>{
            let catArray=[]
            snapshot.docs.map(doc=>{
                catArray.push(doc.data())
            })
            setCategories(catArray)
        })
    },[url, history])
    
    useEffect(() => {
        if(!render){
            document.getElementsByClassName("contact-form-button")[0].disabled=true;
            document.getElementsByClassName("contact-form-button")[0].textContent="Unauthorized";
            document.getElementsByClassName("contact-form-button")[0].style.backgroundColor="#7c7c8c";
        }else{
            document.getElementsByClassName("contact-form-button")[0].disabled=false;
            document.getElementsByClassName("contact-form-button")[0].textContent="Publish";
            document.getElementsByClassName("contact-form-button")[0].style.backgroundColor="#000";
        }
    }, [render])
    const publishTheBlog=()=>{
        let time=new Date().getTime()
        const img=document.getElementById("photo").files[0]
        if(category==="" || featured==="" || editorChoice==="" || author==="" || title==="" || content==="" || carousel==="" || trending==="" || img===undefined){
            document.getElementById("message").style.visibility="visible"
            setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'red'}} class="fad fa-exclamation-circle"></i> Fill out all the fields first.</p>)
            setTimeout(() => {
                setMessage("")
                document.getElementById("message").style.visibility="hidden"
            }, 3000);
        }else{
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
                setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}>Publishing blog  <CircularProgress color="#000" size="20px" /></p>)
            })
            .catch((error) => {
                setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'red'}} class="fad fa-exclamation-circle"></i> Some error has occured</p>)
                setTimeout(() => {
                    setMessage("")
                    document.getElementById("message").style.visibility="hidden"
                }, 3000);
            });
            var metadata = {
                contentType: img.type,
            };
            firebase.storage().ref().child('images/'+time).put(img, metadata).then((snapshot)=>{
                setMessage(<p style={{'color':'#000', 'padding':'10px 30px', 'margin':'auto'}}><i style={{'color':'#38b000'}} class="fa fa-check-circle" aria-hidden="true"></i> Blog published</p>)
                setAuthor("")
                setEditorChoice("")
                setFeatured("")
                setTrending("")
                setCarousel("")
                setCategory("")
                setContent("")
                setTitle("")
                setTimeout(() => {
                    setMessage("")
                    document.getElementById("message").style.visibility="hidden"
                }, 3000);
                // console.log(snapshot.ref.fullPath)
            })
        }
    }  

    const notifyStyle={
        'position':'fixed', 
        'bottom':'20px',
        'left':'50%',
        'transform':'translateX(-50%)', 
        'backgroundColor':'#fff',
        'display':'flex', 
        'justifyContent':'center', 
        'alignItems':'center', 
        'visibility':'hidden', 
        'borderRadius':'8px', 
        'border':'2px solid #4ecca3', 
        'z-index':'66', 
        'boxShadow':'1px 1px 18px 4px rgba(255,255,255,0.2)'
    }
    return (
        <div>
        <Brand />
        <div style={window.innerWidth<500?{'padding':'0 5%'}:{'padding':'0 10%'}}>
            <div className="contact-panel">
                <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Write a Blog</h1>
                <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
                <div className="form-group">
                    <label>Blog Category</label>
                    <select value={category} onChange={e=>setCategory(e.target.value)} className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                        <option value="">Select a Category</option>
                        {categories.map(cat=>{
                            return  <option value={cat.param}>{cat.category}</option>
                        })}
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
                <div id="message" style={notifyStyle}>
                    {message}
                </div>
            </div>
        </div>
        <br />
        <Footer />
    </div>
)
}




