import React from 'react'

function CategoryTile(props){
    return(<div style={{'background':'url(' + props.bg + ')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
        <a href='/Category' className='categoryTile' style={{'backgroundColor':'rgba(0,0,0,0.5)'}} >
    <div>
    <span style={{'text-transform':'upperCase', 'letter-spacing':'1px',  'fontSize':'0.9rem'}}>{props.category}</span>
    </div>  
    </a>  </div>)
}
export default CategoryTile;