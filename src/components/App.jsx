import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CategoryPage from "./CategoryPage";
import ParticularPostPage from "./ParticularPostPage";
import ParticularCategoryPage from "./ParticularCategoryPage";
import WriteBlog from "./WriteBlog";
import Entry from "./Entry";

export default function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new-entry">
            <Entry />
          </Route>
          {/*<Route path="/write-blog">
            <WriteBlog />
          </Route>*/}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/categories">
            <CategoryPage />
          </Route>
          <Route path="/posts/:id" exact>
            <ParticularPostPage />
          </Route>
          <Route path="/:category" exact>
            <ParticularCategoryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
