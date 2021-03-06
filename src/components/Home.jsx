import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Categories from './Categories'
import Featured from './Featured'
import Latest from './Latest'
import AboutSection from './AboutSection'
import Footer from './Footer'
// import {useState, useEffect} from 'react'
// import Loader from './Loader'


export default function Home() {
    // const [loading, setLoading]=useState(true)
    // useEffect(()=>{
    //   document.onreadystatechange = function () {
    //     if (document.readyState === 'complete') {
    //         setLoading(false)
    //     }
    //   }
    // })

    return(
    <div>
      <Header />
      <div style={{'padding':'0 5%'}}>
        <Carousel />
      </div>
      <br />
      <div style={{'padding':'0 5%'}}>
        <Categories />
      </div>
      <br />
      <br />
      <div style={{'padding':'0 5%'}}>
        <Featured />
      </div>
      <br />
      <div style={{'padding':'0 5%'}} className='row'>
        <div className='col-lg-8'>
          <Latest />
        </div>
        <div className='col-lg-4'>
          <AboutSection />
        </div>
      </div>
      <Footer />  
    </div>)
}
