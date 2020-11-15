import React from 'react'
import {ArrowForward} from '@material-ui/icons'

function GeneralLink(props){
    return(<div>
    <a className='link' href={props.href}>
    {props.text}
    </a>
    </div>)
}
export default GeneralLink;