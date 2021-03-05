import React from 'react'

export default function GeneralLink(props){
    return(<div>
        <a className='link' href={props.href}>
            {props.text}
        </a>
    </div>)
}
