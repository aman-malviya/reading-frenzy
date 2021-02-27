import React from 'react'
import CategoryTile from './CategoryTile'

function Categories(){
    return(<div>
    <div className='row category-section'>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/science"><CategoryTile category='Science' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fmoritz-kindler-G66K_ERZRhM-unsplash.jpg?alt=media&token=56016f6e-1198-404f-ad25-c47003ccff9e' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/life-style"><CategoryTile category='Life Style' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Faziz-acharki-U3C79SeHa7k-unsplash.jpg?alt=media&token=a427e2f2-5be5-4ff8-9b07-84b0d4b9f0a5' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/travel"><CategoryTile category='Travel' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fpatrick-tomasso-5hvn-2WW6rY-unsplash.jpg?alt=media&token=b68a48f1-f068-4cb1-a91a-ac16e571a443' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/technology"><CategoryTile category='Technology' bg='https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fmarvin-meyer-SYTO3xs06fU-unsplash.jpg?alt=media&token=f4cca3e5-f3f4-49cb-9ad4-fe1f6b198edd' /></a></div>
    </div>
    <a href='/categories' style={{'float':'right', 'color':'#010101'}}>View all</a>
    </div>)
}
export default Categories;