import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Categories from './Categories'
import Featured from './Featured'
import Latest from './Latest'
import AboutSection from './AboutSection'

function Home() {

    return(<div>
      <Header />
      <Carousel />
      <Categories />
      <Featured />
      <div className='row'>
      <div className='col-lg-8'><Latest /></div>
      <div className='col-lg-4'><AboutSection /></div>
      </div>
     
    </div>)
}

export default Home;