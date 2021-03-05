import React,{useState, useEffect} from 'react'
import CategoryTile from './CategoryTile'
import firebase from '../fire'

export default function Categories(){

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
    <div className='row category-section'>
        {categories.map(cat=>{
            return <div className='col-lg col-md-6'><a style={{'textDecoration':'none'}} href={"/"+cat.param}><CategoryTile category={cat.category} bg={cat.imgURL} /></a></div>
        })}   
    </div> 
    <a href='/categories' style={{'float':'right', 'color':'#010101'}}>View all</a>
    </div>)
}