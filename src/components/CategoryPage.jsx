import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CategoryTile from './CategoryTile'
function CategoryPage(){
    return(<div>
    <Header  />
    <br />
    <br />
    <div style={{'padding':'0 5%'}}>
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h1>
    </div>   
    <div style={{'padding':'0 5%'}} className='row'>
    <div className='col-lg-6 col-md-6'><CategoryTile category='Science' bg='Assets/1.jpg' /></div>
    <div className='col-lg-6 col-md-6'><CategoryTile category='Life Style' bg='Assets/2.jpg' /></div>
    </div>
    <div style={{'padding':'0 5%'}} className='row'>
    <div className='col-lg-6 col-md-6'><CategoryTile category='Travel' bg='Assets/3.jpg' /></div>
    <div className='col-lg-6 col-md-6'><CategoryTile category='Recipes' bg='Assets/4.jpg' /></div>
    </div>
    <Footer />
    </div>)
}
export default CategoryPage;