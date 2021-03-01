import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
    const [bg, setBg]=useState("#fff")
    const [font, setFont]=useState("#000")
    const [head, setHead]=useState("#4ecca3")

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > window.innerHeight/4){
                setBg('#000')
                setFont("#fff")
                setHead("#fff")
            }else{
                setBg("#fff")
                setFont("#000")
                setHead("#4ecca3")
            }
        })
    },[])
    useEffect(()=>{
        if(window.innerWidth>600){
            document.getElementById('aboutText').style.fontSize="1.3rem"
        }
    },[])
    
    return(<div>
    <Header />
    <div style={{'transition':'background 1s ease','padding':'0 5%', 'backgroundColor':bg, 'color':font}}>
        <div style={{'backgroundImage':'url(Assets/collage.jpeg)', 'textAlign':'center', 'backgroundSize':'cover','backgroundAttachment':'fixed', 'scrollBehaviour':'smooth'}}>
            <div style={{'padding':'12%'}} className="shade">
                <h1 style={{'fontFamily':'"EB Garamond",serif', 'fontSize':'3rem', 'color':head}}>About Us</h1>
            </div>
        </div>
        <br/>
        <h1 style={{'fontFamily':'"EB Garamond",serif', 'textAlign':'center', 'fontWeight':'550'}}>Simplifying Quizzes</h1>
        <div style={{'width':'50px', 'height':'3px', 'backgroundColor':font, 'margin':'5px auto', 'borderRadius':'2px'}}></div>
        <div style={{'width':'40px', 'height':'3px', 'backgroundColor':font, 'margin':'5px auto', 'borderRadius':'2px'}}></div>
        <div style={{'width':'30px', 'height':'3px', 'backgroundColor':font, 'margin':'5px auto', 'borderRadius':'2px'}}></div>
        <br />
        <p id='aboutText' style={{"font-family":"'Karla', sans-serif", 'padding':'2% 5%', 'fontSize':'1rem', 'fontWeight':'550', 'marginBottom':'0', 'textAlign':'justify', 'textAlignLast':'center'}}>Quizzers' Club MANIT (QCM) is the official quizzing club of Maulana Azad Institute of Technology Bhopal. QCM is formed by a bunch of quizzing prodigies of MANIT in Feb 2013. We are a group of enthusiastic quizzers, executives, designers and web developers. The purpose of the society is to promote quizzing, group discussion and debate to increase general awareness in the student community. Quizzers' Club conducts various events throughout the year, each of them having an excellent footfall from MP and beyond.
        <br /><br />
        The leading events organized by Quizzers' Club MANIT are Manthan (The Flagship Event), TQQW, Quizzotica and Vihaan. Behind all these events, the purpose is to bring like-minded quizzing enthusiasts together and let them compete & learn with mutual sharing of ideas and knowledge, along the side providing them with an opportunity to prove their mettle in quizzing.
        <br />
        <br />
        <br />
        {/*<div style={{'width':'100%', 'height':'1px', 'backgroundColor':font}}></div>*/}
        <div style={{'width':'50px', 'height':'3px', 'backgroundColor':font, 'margin':'5px auto', 'borderRadius':'2px'}}></div>
        
        
        <br />
        </p>
    </div>
    <Footer />
    </div>)
}

export default About;