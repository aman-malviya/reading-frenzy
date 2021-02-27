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
    <div className='col-lg-6 col-md-6'><a href="/science" style={{'textDecoration':'none'}}><CategoryTile category='Science' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fmoritz-kindler-G66K_ERZRhM-unsplash.jpg?alt=media&token=56016f6e-1198-404f-ad25-c47003ccff9e' /></a></div>
    <div className='col-lg-6 col-md-6'><a href="/life-style" style={{'textDecoration':'none'}}><CategoryTile category='Life Style' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Faziz-acharki-U3C79SeHa7k-unsplash.jpg?alt=media&token=a427e2f2-5be5-4ff8-9b07-84b0d4b9f0a5' /></a></div>
    </div>
    <div style={{'padding':'0 5%'}} className='row'>
    <div className='col-lg-6 col-md-6'><a href="/travel" style={{'textDecoration':'none'}}><CategoryTile category='Travel' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fpatrick-tomasso-5hvn-2WW6rY-unsplash.jpg?alt=media&token=b68a48f1-f068-4cb1-a91a-ac16e571a443' /></a></div>
    <div className='col-lg-6 col-md-6'><a href="/technology" style={{'textDecoration':'none'}}><CategoryTile category='Technology' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fmarvin-meyer-SYTO3xs06fU-unsplash.jpg?alt=media&token=f4cca3e5-f3f4-49cb-9ad4-fe1f6b198edd' /></a></div>
    </div>
    <Footer />
    </div>)
}
export default CategoryPage;