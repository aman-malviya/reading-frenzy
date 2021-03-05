import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CarouselWindow from './CarouselWindow'
import firebase from '../fire'


export default function Contact() {

    const [name, setName]=useState("")
    const [topic, setTopic]=useState("")
    const [msg, setMsg]=useState("")
    const [email, setEmail]=useState("")
    const [message, setMessage]=useState("")

    const sendMessage=(e)=>{
        if(name === "" || email === "" || topic === "" || msg === "" ){
            setMessage(<p style={{'color':'red'}}>Fill out all the fields first</p>)
            setTimeout(() => {
                setMessage("")
            }, 3000);
        }else{
            firebase.firestore().collection("Messages").doc().set({
                name:name,
                email:email,
                topic:topic,
                message:msg
            }).then(()=>{
                setMessage(<p style={{'color':'green'}}>Your message has been sent</p>)
                setTimeout(() => {
                    setMessage("")
                }, 3000);
            })
        }
    }

    const bannerStyle={
        'backgroundImage':'url(https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2F2.jpg?alt=media&token=9be2ec0d-c6f6-4d91-b614-780ae225d65d)',
        'backgroundSize':'cover',
        'backgroundPosition':'center'
    }

    return(<div style={{'backgroundColor':'fff'}}>
        <Header />
        <div style={{'padding':'0 5%'}}>
            <div style={bannerStyle}>
                <CarouselWindow category='Get in Touch' title='Contact Us' content="Drop us a line. We would love to hear from you. " linkDisplay='none' />
            </div>
        </div>
        <br />
        <div style={{'padding':'0 5%'}} class="row padding no-gutters">
            <div className='col-lg-4'>
                <br />
                <br />
                <h2 style={{'fontFamily':'"EB Garamond",serif'}}>Find Us</h2>
                <div className="contact-details">
                    <i className="fas fa-university"></i>
                    <p>Address</p>
                    <h6>NIT Bhopal,<br />Madhya Pradesh,<br />India</h6>
                </div>
                <div className="contact-details">
                    <i className="far fa-envelope"></i>
                    <p>Mail Us</p>
                    <h6>quizzersclubmanit@gmail.com</h6>
                </div>
            </div>
            <div className="col-lg-8 contact-panel">
                <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Message Us</h1>
                <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)'}} />
                <div className="form-group">
                    <input value={name} onChange={e=>setName(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="Name" required />
                </div>
                <div className="form-group">
                    <input value={email} onChange={e=>setEmail(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="E-Mail" required />
                </div>
                <div className="form-group">
                    <input value={topic} onChange={e=>setTopic(e.target.value)} type='text' style={{'width':'100%', 'background':'none'}} placeholder="What is it about?" required />
                </div>
                <div className="form-group">
                    <textarea value={msg} onChange={e=>setMsg(e.target.value)} style={{'width':'100%', 'backgroundColor':'rgba(0,0,0,0)'}} placeholder="Message" required rows='4' />
                </div>
                <button onClick={sendMessage} className="contact-form-button">Send A Message</button>
                <br />
                <p>{message}</p>
            </div>
        </div>
        <br />
        <br />
        <Footer />
    </div>)
}
