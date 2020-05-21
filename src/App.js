import React from 'react';
import TrailsPage from './containers/TrailsPage'
import {Switch, Route, Link} from "react-router-dom";
import NavBar from './components/NavBar'
import About from './containers/About'
import TrailsShowPage from './containers/TrailsShowPage'
import MyHikesPage from './containers/MyHikesPage'
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={TrailsPage} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/trails/:id" component={TrailsShowPage}/>
      <Route exact path="/myhikes" component={MyHikesPage}/>
      
    </div>
  );
}

export default App;
