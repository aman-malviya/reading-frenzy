import React from 'react'

export default function CategoryTile(props){
    return(<div style={{'background':'url(' + props.bg + ')', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
        <div className='categoryTile' style={{'backgroundColor':'rgba(0,0,0,0.5)'}} >
            <div>
                <span style={{'textTransform':'upperCase', 'letterSpacing':'1px',  'fontSize':'0.9rem'}}>
                    {props.category}
                </span>
            </div>  
        </div>  
    </div>)
}