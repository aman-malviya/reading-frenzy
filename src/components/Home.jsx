import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Categories from './Categories'
import Featured from './Featured'
import Latest from './Latest'
import AboutSection from './AboutSection'
import Footer from './Footer'

function Home() {

    return(<div>
      <Header />
      <div style={{'padding':'0 5%'}}><Carousel /></div>
      <div style={{'padding':'0 5%'}}><Categories /></div>
      <div style={{'padding':'0 5%'}}><Featured /></div>
      <div style={{'padding':'0 5%'}} className='row'>
      <div className='col-lg-8'><Latest /></div>
      <div className='col-lg-4'><AboutSection /></div>
      </div>
      <Footer />
     
    </div>)
}

export default Home;