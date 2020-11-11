import React from 'react'

function LikedTile(props){
    return(<div className='grid-container' style={{'margin-bottom':'3%'}}>
    <div className='grid-item d-flex align-items-center'>
    <span className='d-flex justify-content-center align-items-center' style={{ 'height':'30px', 'width':'30px', 'border':'1px solid rgba(0,0,0,0.8)', 'border-radius':'3px', 'transform':'rotate(45deg)'}}><b style={{'transform':'rotate(-45deg)'}}>1</b></span>
    </div>
    <div className='grid-item d-flex align-items-center'>
    <h5 style={{'fontFamily':'"EB Garamond",serif'}}>{props.title}</h5>
    </div>
    <div className='grid-item d-flex align-items-center'>
    <div className='liked-img'>
    <img width='100%' src={props.bg} />
    </div>
    </div>

    </div>)
}
export default LikedTile;