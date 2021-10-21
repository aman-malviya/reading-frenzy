import React, {useState} from 'react'
import Brand from './Brand'
import Footer from './Footer'
import firebase from '../fire'

function Entry() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [scholar, setscholar] = useState("")
    const [category, setcategory] = useState("")
    const [title, settitle] = useState("")
    const [message, setMessage]=useState("Ababab");
    const [loading, setloading] = useState(false)

    const submitblog=(e)=>{
        setloading(true)
        e.preventDefault()
        const img=document.getElementsByClassName("banner")[0].files[0];
        const blog=document.getElementsByClassName("blog")[0].files[0];
        var imgmetadata = {
            contentType: img.type,
        };
        var blogmetadata = {
            contentType: blog.type,
        };
        const currTime=new Date().getTime()

        firebase.storage().ref().child("Blogs/banner"+currTime).put(img, imgmetadata).then(myimg=>{
            firebase.storage().ref().child("Blogs/blog"+currTime).put(blog,blogmetadata).then(myblog=>{
                myimg.ref.getDownloadURL().then(imgURL=>{
                    myblog.ref.getDownloadURL().then(blogURL=>{
                        firebase.firestore().collection("blogging-competition").add({
                            Name:name,
                            Email:email,
                            ScholarNumber:scholar,
                            BlogCategory:category,
                            BlogTitle:title,
                            BlogBanner:imgURL,
                            Blog:blogURL
                        }).then(()=>{
                            setloading(false)
                            setMessage(<p className="w-100" style={{'color':'#000', 'padding':'10px 30px', 'textAlign':'center'}}><i style={{'color':'red'}} class="fad fa-exclamation-circle"></i> Blog Successfully Submitted</p>)
                            setTimeout(() => {
                                setMessage("")
                            }, 3000);
                        })
                    })
                })
            })
        })
    }
    return (
        <div>
        <Brand />
        <div style={window.innerWidth<500?{'padding':'0 5%'}:{'padding':'0 10%'}}>
            <div className="contact-panel">
                <form onSubmit={submitblog}>
                    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Write a Blog</h1>
                    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
                    <div className="form-group">
                        <input value={name} onChange={e=>setname(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input value={email} onChange={e=>setemail(e.target.value)} type='email' style={{'width':'100%', 'background':'none'}} placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input value={scholar} onChange={e=>setscholar(e.target.value)} type='number' style={{'width':'100%', 'background':'none'}} placeholder="Scholar Number" required />
                    </div>
                    <div className="form-group">
                        <input value={category} onChange={e=>setcategory(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Blog Category" required />
                    </div>
                    <div className="form-group">
                        <input value={title} onChange={e=>settitle(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Blog Title" required />
                    </div>
                    <br />
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Blog Banner</span>
                        </div>
                        <div class="custom-file">
                            <input required type="file" class="custom-file-input banner" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <br />
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Your Blog</span>
                        </div>
                        <div class="custom-file">
                            <input required type="file" class="custom-file-input blog" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="contact-form-button">
                    {loading?
                        <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        :
                        "Submit"
                    }
                    </button>
                    {message}
                </form>
            </div>
        </div>
        <br />
        <Footer />
    </div>
    )
}

export default Entry
