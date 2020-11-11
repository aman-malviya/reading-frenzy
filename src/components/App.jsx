import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App(){
    return(<div>
    <Router>
    <Switch>
    <Route path='/' exact><Home /></Route>
    <Route path='/about'><About /></Route>
    <Route path='/contact'><Contact /></Route>
    </Switch>
    </Router>
    </div>)
}

export default App;