import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import CategoryPage from './CategoryPage'
import ParticularPostPage from './ParticularPostPage'
import ParticularCategoryPage from './ParticularCategoryPage'
import firebase from '../fire'
import WriteBlog from './WriteBlog'


function App(){
    const [todoList, setTodoList]=useState();
    // function handleChange(e){
    //     setTitle(e.target.value);
    // }
    // function handleClick(){
    //     const todoRef=firebase.database().ref("Todo");
    //     const todo={
    //         title,
    //         complete:false,
    //     }
    //     todoRef.push(todo);
    // }
    // const [todoList, setTodoList]=useState('');

    // useEffect(function(){
    //    const todoRef=firebase.database().ref("Todo");
    //    todoRef.on("value", function(snapshot) {
    //        const todos=snapshot.val();
    //        const todoList=[];
    //        for(let id in todos){
    //            todoList.push(todos[id]);
    //        }
    //        setTodoList(todoList);
    //    });

    // });
    return(<div>
    <div>{todoList?todoList.map((todo)=><h1>{todo.title}</h1>):''}</div>
    <Router>
    <Switch>
    <Route path='/' exact><Home /></Route>
    <Route path='/write-blog'><WriteBlog /></Route>
    <Route path='/about'><About /></Route>
    <Route path='/contact'><Contact /></Route>
    <Route path='/categories'><CategoryPage /></Route>
    <Route path='/posts/:id' exact><ParticularPostPage /></Route>
    <Route path='/:category' exact><ParticularCategoryPage /></Route>
    </Switch>
    </Router>
    </div>)
}

export default App;

// <input onChange={handleChange} type='text' value={title} />
    // <button onClick={handleClick}>Submit</button>