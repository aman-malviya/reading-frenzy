import React from 'react'

function CategoryTile(props){
    return(<div style={{'background':'url(' + props.bg + ')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
        <a className='categoryTile' style={{'backgroundColor':'rgba(0,0,0,0.5)'}} >
    <div>
    <span style={{'textTransform':'upperCase', 'letterSpacing':'1px',  'fontSize':'0.9rem'}}>{props.category}</span>
    </div>  
    </a>  </div>)
}
export default CategoryTile;