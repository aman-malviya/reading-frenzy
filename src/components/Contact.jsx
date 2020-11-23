import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CarouselWindow from './CarouselWindow'
import posts from '../posts'


function Contact() {
    return(<div>
    <Header />
    <CarouselWindow category='Get in Touch' title='Contact Us' content={posts[1].postContent.substring(0,200)}  background="Assets/2.jpg" linkDisplay='none' />
    <br />
    <div style={{'padding':'0 5%'}} class="row padding no-gutters">
    <div className='col-lg-4'>
    <br /><br />
    <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Find Us</h2>
    <div className="contact-details">
            <i className="fas fa-university"></i>
            <p>Address</p>
            <h6>NIT Bhopal,<br />Madhya Pradesh,<br />India</h6>
        </div>
        <div className="contact-details">
            <i className="fas fa-phone-alt"></i>
            <p>Call Me</p>
            <h6>+91 6264937094</h6>
            <h6>+91 8269366460</h6>
        </div>
        <div className="contact-details">
            <i className="far fa-envelope"></i>
            <p>Email Address</p>
            <h6>amanmalv09@gmail.com</h6>
        </div>
    </div>
        <div className="col-lg-8 contact-panel">
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Message Us</h1>
    <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />

            <form className="contact-form" action="/contact" method="POST">
                <div className="form-group">
                <input type='text' style={{'width':'100%', 'background':'none'}} placeholder="Name" required />
                </div>
                <div className="form-group">
                <input type='text' style={{'width':'100%', 'background':'none'}} placeholder="E-Mail" required />
                </div><div className="form-group">
                <input type='text' style={{'width':'100%', 'background':'none'}} placeholder="Company" required />
                </div><div className="form-group">
                <textarea style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Message" required rows='4' />
                </div>
                
                <button className="contact-form-button">Send A Message</button>
            </form>
        </div>

    </div>
     <br />
    <br />
    <Footer />
    </div>)
}

export default Contact;