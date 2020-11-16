import React from 'react'
import {Link} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

function DownCategoryPanel(){
    return(<div>
    <Link className='category-link' href='/science'>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Science <span className='forward' style={{'float':'right','opacity':'0.6'}}><ArrowForward style={{'fontSize':'20'}} /></span>
    </div>
    </Link>
    <Link className='category-link' href='/recipes'>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Recipes <span className='forward' style={{'float':'right','opacity':'0.6'}}><ArrowForward style={{'fontSize':'20'}} /></span>
    </div>
    </Link>
    <Link className='category-link' href='/life-style'>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)','color':'rgba(0,0,0,0.8)'}}>Life Style <span className='forward' style={{'float':'right','opacity':'0.6'}}><ArrowForward style={{'fontSize':'20'}} /></span></div>
    </Link>
    <Link className='category-link' href='/travel'>
    <div style={{'width':'100%', 'padding':'2%', 'border-bottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
    Travel <span className='forward' style={{'float':'right','opacity':'0.6'}}><ArrowForward style={{'fontSize':'20'}} /></span>
    </div>
    </Link>
    </div>)
}
export default DownCategoryPanel;