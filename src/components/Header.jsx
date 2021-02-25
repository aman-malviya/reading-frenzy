import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar'


function Header(){
    return (<div style={{'padding':'0 10%'}}>
    <Brand />
    <Navbar />
    </div>)
}

export default Header;