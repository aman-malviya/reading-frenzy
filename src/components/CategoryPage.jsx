import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import CategoryTile from './CategoryTile'
import firebase from '../fire'

function CategoryPage(){

    const [categories, setCategories]=useState([])
    useEffect(()=>{
        firebase.firestore().collection("Categories").onSnapshot(snapshot=>{
            let catArray=[]
            snapshot.docs.map(doc=>{
                catArray.push(doc.data())
            })
            setCategories(catArray)
        })
    },[])

    return(<div>
    <Header  />
    <br />
    <br />
    <div style={{'padding':'0 5%'}}>
    <h1 style={{'fontFamily':'"EB Garamond",serif'}}>Categories</h1>
    </div>   
    <div style={{'padding':'0 5%'}} className='row'>
        {categories.map(cat=>{
            return <div className='col-lg-6 col-md-6'>
                <a href={"/"+cat.param} style={{'textDecoration':'none'}}>
                    <CategoryTile category={cat.category} bg={cat.imgURL} />
                </a>
            </div>
        })}
    </div>
    <Footer />
    </div>)
}
export default CategoryPage;