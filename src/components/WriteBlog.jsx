import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Para(){
    return(<div className="form-group">
                <textarea style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Para" required rows='3' />
                </div>)
}

function Tagline(){
    return(<div className="form-group">
                <textarea style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Tagline" required rows='3' />
                </div>)
}
let elements=[];

function handlePara() {
    elements.push("Para");
    console.log(elements);
}
function handleTagline() {
    elements.push("Tagline");
    console.log(elements);
}

function WriteBlog() {
    return (<div>
    <Header />
    <div className="row" style={{'padding':'0 5%'}}>
    <div className="col-lg-5" style={{'padding':'0 5.4% 0 0'}}>
    <img src="Assets/2.jpg" width="100%" />
    </div>
    <div style={{'overflow-y':'scroll', 'height':'700px'}} className="contact-panel col-lg-7">
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Write a Blog</h1>
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />

            <form className="contact-form" action="/contact" method="POST">
                
                <div className="form-group">
                <label>Blog Category</label>
                <select className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option>Life Style</option>
                <option>Travel</option>
                <option>Science</option>
                <option>Recipes</option>
                </select>
                </div>
                <div className="form-group">
                <label>Editor's Choice</label>
                <select className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option>Yes</option>
                <option>No</option>
                </select>
                </div>
                <div className="form-group">
                <label>Featured</label>
                <select className="form-control" type='text' style={{'width':'100%', 'background':'none'}} required >
                <option>Yes</option>
                <option>No</option>
                </select>
                </div>
                <br />
                <div className="form-group">
                <input type='text' style={{'width':'100%', 'background':'none'}} placeholder="Author" required />
                </div>
                <div className="form-group">
                <input type='text' style={{'width':'100%', 'background':'none'}} placeholder="Title" required />
                </div>
                <Para />
                <Tagline />
                {elements.map((element)=><div className="form-group d-flex align-items-center">
                <textarea autofocus style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder={element} required rows='3' /><span className="form-group d-flex justify-content-center align-items-center" style={{'display':'block', 'height':'40px','width':'80px', 'backgroundColor':'red', 'color':'#fff', 'borderRadius':'5%', 'fontWeight':'bold'}}>Remove</span>
                </div>)}
                <div className="d-flex">
                <button onClick={handlePara} style={{'backgroundColor':'#16697a'}} className="contact-form-button">Add a Para</button>
                <button onClick={handleTagline} style={{'backgroundColor':'#db6400'}} className="contact-form-button">Add a Tagline</button>
                </div>
                <br />
                <button className="contact-form-button">Publish</button>
            </form>
        </div>
    </div>
    <br />
    <Footer />
    </div>)
}
export default WriteBlog;