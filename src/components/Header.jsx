import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar'

export default function Header(){
    return (<div style={window.innerWidth<600?{'padding':'0'}:{'padding':'0 5%'}}>
        <Brand />
        <Navbar />
    </div>)
}
