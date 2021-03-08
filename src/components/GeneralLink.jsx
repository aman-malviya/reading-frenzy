import React from 'react'

export default function GeneralLink(props){
    return(<div>
        <a style={{'fontSize':'0.8rem'}} className='link' href={props.href}>
             {props.text}
        </a>
    </div>)
}
