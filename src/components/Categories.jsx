import React from 'react'
import CategoryTile from './CategoryTile'

function Categories(){
    return(<div>
    <div className='row category-section'>
    <div className='col-lg col-md-6'><CategoryTile category='Science' bg='Assets/1.jpg' /></div>
    <div className='col-lg col-md-6'><CategoryTile category='Life Style' bg='Assets/2.jpg' /></div>
    <div className='col-lg col-md-6'><CategoryTile category='Travel' bg='Assets/3.jpg' /></div>
    <div className='col-lg col-md-6'><CategoryTile category='Recipes' bg='Assets/4.jpg' /></div>
    </div>
    <a href='' style={{'float':'right', 'color':'#010101'}}>View all</a>
    </div>)
}
export default Categories;