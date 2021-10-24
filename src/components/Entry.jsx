import React, {useState} from 'react'
import Brand from './Brand'
import Footer from './Footer'
import firebase from '../fire'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toast from './Toast';

function Entry() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [scholar, setscholar] = useState("")
    const [category, setcategory] = useState("")
    const [title, settitle] = useState("")
    const [message, setMessage]=useState();
    const [loading, setloading] = useState(false)
    const [file1, setfile1] = useState("")
    const [file2, setfile2] = useState("")

    const submitblog=(e)=>{
        setloading(true)
        e.target.lastChild.disabled=true;
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
                            e.target.lastChild.disabled=false;
                            setMessage(<Toast message="Blog submitted for review" status="success" />)
                            setTimeout(() => {
                                setMessage("")
                                window.location.reload();
                            }, 3000);
                        }).catch(err=>{
                            setloading(false)
                            e.target.lastChild.disabled=false;
                            setMessage(<Toast message={err.message} status="failure" />)
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
                            <input onChange={e=>setfile1(e.target.files[0].name)} required type="file" class="custom-file-input banner" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" accept="image/*" />
                            <label class="custom-file-label" for="inputGroupFile01">{file1?file1:"Choose file"}</label>
                        </div>
                    </div>
                    <br />
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Your Blog</span>
                        </div>
                        <div class="custom-file">
                            <input onChange={e=>setfile2(e.target.files[0].name)} required type="file" class="custom-file-input blog" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" accept="application/pdf" />
                            <label class="custom-file-label" for="inputGroupFile01">{file2?file2:"Choose file"}</label>
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
                <br />
                <br />
                <br />
                <h1 style={{'fontFamily':'"EB Garamond",serif'}}>FAQs</h1>
                <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
                <br />
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <p className="m-0 p-0" style={{'fontSize':'1.2rem'}}>
                        How do I submit a blog here?
                    </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                        Just fill the form displayed above. In the <strong>Blog Banner</strong> field attach a relevant image that you want to be the banner for your blog. And in the <strong>Your Blog</strong> field, attach your blog in the pdf format.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <p className="m-0 p-0" style={{'fontSize':'1.2rem'}}>
                        What happens to my blog after submitting?
                    </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Your blog will be reviewed and proofread by our content team. If they find your blog worth publishing, it will be published on our website.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <p className="m-0 p-0" style={{'fontSize':'1.2rem'}}>
                        How would I know if my blog is going to be published?
                    </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Our executive team will inform you through Email.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <p className="m-0 p-0" style={{'fontSize':'1.2rem'}}>
                        Can I submit more than one blog?
                    </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, you can.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <br/>
        <Footer />
    </div>
    )
}

export default Entry
