import React from 'react'
import CategoryTile from './CategoryTile'

function Categories(){
    return(<div>
    <div className='row category-section'>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/science"><CategoryTile category='Science' bg='Assets/1.jpg' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/life-style"><CategoryTile category='Life Style' bg='Assets/2.jpg' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/travel"><CategoryTile category='Travel' bg='Assets/3.jpg' /></a></div>
    <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href="/recipes"><CategoryTile category='Recipes' bg='Assets/4.jpg' /></a></div>
    </div>
    <a href='/categories' style={{'float':'right', 'color':'#010101'}}>View all</a>
    </div>)
}
export default Categories;