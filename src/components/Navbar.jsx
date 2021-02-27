import React, {useState, useEffect} from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import firebase from '../fire'

function Navbar(){
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

    return(<div className='d-flex justify-content-center'>
    <nav class="navbar navbar-expand-lg">
      <button
        style={{'backgroundColor':'#000', 'color':'#fff', 'margin':'auto'}}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuRoundedIcon />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {categories.map(cat=>{
            return <li className="nav-item">
              <a className="nav-link hvr-underline-reveal" href={"/"+cat.param}>
                {cat.category}
              </a>
            </li>
          })}
          <li className="nav-item">
            <a className="nav-link hvr-underline-reveal" href="/categories">
              Categories
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
    </div>)
}

export default Navbar;