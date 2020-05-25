import React from 'react';
import TrailsPage from './containers/TrailsPage'
import {Switch, Route, Link, Redirect} from "react-router-dom";
import NavBar from './components/NavBar'
import About from './containers/About'
import TrailsShowPage from './containers/TrailsShowPage'
import MyHikesPage from './containers/MyHikesPage'
import LoginForm from './components/loginForm'
import './App.css';



class App extends React.Component{
    constructor(){
      super()
      this.state = {
          trails: [],
          currentUser: null
      }
  }

  componentDidMount(){
      fetch('http://localhost:3000/trails')
      .then(resp => resp.json())
      .then(data => 
          this.setState({
              trails: data
          }))
  }

  changeCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser}  />
        <Route 
          exact path="/" 
          render={() => {
              return (< TrailsPage trails={this.state.trails}/>)}} />


        <Route exact path="/about" component={About}/>
        <Route exact path="/trails/:id" render={ (routerProps) => {
              console.log(routerProps)
            let id = routerProps.match.params.id
            let trailShow = this.state.trails.find(t => t.id == id)
            return (< TrailsShowPage trail={trailShow} />)
        }}
      
        />

        <Route exact path="/myhikes" render={() => this.state.currentUser === null? <Redirect to="/login" /> : < MyHikesPage /> } />
       
        <Route exact path="/login" render={ () => 
              this.state.currentUser === null? < LoginForm changeCurrentUser={this.changeCurrentUser}/> : <Redirect to="/myhikes"/> } />
          
      </div>
    )
    }
}

export default App;


{/* <Route exact path="/paintings/:id" render={
            (routerProps) => {
              //get the ID here in this function
              let id = routerProps.match.params.id
              //find the painting object in my paintingsList [] with this id
              let painting = this.state.paintingsList.find(p => p.id == id)
              console.log("what is my painting?", painting)
              return <PaintingDetails painting={painting}/>
            }
          } */}