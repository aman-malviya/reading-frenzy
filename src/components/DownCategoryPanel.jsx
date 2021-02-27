import React, {useState, useEffect} from 'react'
import {Link} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'
import firebase from '../fire'

function DownCategoryPanel(){
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        firebase.firestore().collection("Categories").where('top', '==', true).limit(4).onSnapshot(snapshot=>{
            let catArray=[]
            snapshot.docs.map(doc=>{
                catArray.push(doc.data())
            })
            setCategories(catArray)
        })
    },[])


    return(<div>
        {categories.map(cat=>{
            return <Link className='category-link' href={'/'+cat.param}>
                <div style={{'width':'100%', 'padding':'2%', 'borderBottom':'1px solid rgba(0,0,0,0.2)', 'color':'rgba(0,0,0,0.8)'}}>
                    {cat.category} <span className='forward' style={{'float':'right','opacity':'0.6'}}><ArrowForward style={{'fontSize':'20'}} /></span>
                </div>
            </Link>
        })}
    </div>)
}
export default DownCategoryPanel;