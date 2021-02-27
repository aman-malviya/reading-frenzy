import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
    return(<div>
    <Header />
    <div style={{'padding':'0 5%'}}>
        <h1 style={{'fontFamily':'"EB Garamond",serif'}}>About Us</h1>
    </div>
    <Footer />
    </div>)
}

export default About;