import React from 'react';
import TrailsPage from './containers/TrailsPage'
import {Switch, Route, Redirect} from "react-router-dom";
import NavBar from './components/NavBar'
import About from './containers/About'
import TrailsShowPage from './containers/TrailsShowPage'
import MyHikesPage from './containers/MyHikesPage'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUp'
import FourOhFour from './containers/FourOhFour'
import { Spin } from 'antd';
import './App.css';

//for local
const URL = 'http://localhost:3000/'
// for deployment
// const URL ='https://gettrails-backend.herokuapp.com/'

class App extends React.Component{

    constructor(){
      super()
      this.state = {
          trails: [],
          currentUser: null,
          myHikes: [],
          searchTerm: "",
          loading: true
      }
  }

  componentDidMount(){
      //fetch trails
      fetch(URL + 'trails')
      .then(resp => resp.json())
      .then(data => {
          this.setState({
              trails: data,
              loading: false
        })})
       
      //check if user is logged in and authenticated
      if(localStorage.getItem("token")){
        //fetch request with new route
        fetch(URL+'users/decode_token', {
          headers: {
            "Authenticate": localStorage.token
          }
        })
          .then(response => response.json())
          .then(userData => {
            this.changeCurrentUser(userData)
          }) //update currentuser with signed in user
      }
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({
      currentUser: null ,
      myHikes: [],
    })
  }

  changeCurrentUser = (user) => {
    this.setState({
      currentUser: user,
      myHikes: user.hikes
    })
  }

  handlePatchHike = (hike, obj) => {
    fetch( URL +`/hikes/${hike.id}`, {
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(hike => {
        let updatedArray = this.state.myHikes.map(h => {if (h.id === hike.id){
                                                        return hike} return h})
        this.setState({myHikes: updatedArray})                                          
      })
  }
  // if we only passed in a obj to handleNewHike which includes the trail_id and completed or favorite
  // add user_id to that object at the top of this function, before passing it to the backend 
  handleNewHike = (obj) => {
    if (this.state.currentUser){
      obj.user_id = this.state.currentUser.id
      fetch(URL + "hikes", {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(hike => {
        let myHikesArray = [...this.state.myHikes, hike]
        this.setState({
          myHikes: myHikesArray
        })
      })
    }else {
      alert('You must be logged in to add a hike to your profile.')
    }
  }

  handleRemoveHike = (hike) => {
    fetch( URL +`hikes/${hike.id}`, {
        method: 'DELETE' })

    let updatedMyHikes = this.state.myHikes.filter(h => h.id !== hike.id)
    this.setState({
         myHikes: updatedMyHikes
    })
  }

  handleNewUser = (userObj) => {
    const obj ={
      first_name: userObj.firstname,
      last_name: userObj.lastname,
      username: userObj.username,
      password: userObj.password
    }
    fetch(URL + "users", {
      method: 'POST',
      headers: {'Content-Type' : 'application/json' },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      this.changeCurrentUser(data.user_data)
    })
    
  }

  postComment = (obj) => {
    let newObj = {
      ...obj,
      user_id: this.state.currentUser.id
    }
    fetch(URL + `comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    }).then(res => res.json())
    .then(comment => {
      let trails = this.state.trails.map( t => {
        if (t.id === comment.trail_id){
          let newComments = [comment, ...t.comments]
          return {
            ...t,
            comments: newComments
          }
        }else{
        return t 
      }})
      this.setState({
        trails: trails
      })
    })
  }

  deleteComment = (commentId, trailId) => {
    fetch(URL +`comments/${commentId}`, {
      method: 'DELETE',
    })
    let trails = this.state.trails.map( t => {
      if (t.id === trailId){
        let newComments = [...t.comments].filter( c => c.id !== commentId)
        return {
          ...t,
          comments: newComments
        }
      }
      else{
        return t 
      }
    })
    this.setState({
      trails: trails
    })
  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    // sort my hikes here by favorite status  a.sort(function(a,b){return a.xx-b.xx});
    let myHikesArray = this.state.myHikes.filter(hike=> hike.trail.location.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
    myHikesArray.sort(function(a, b){return b.favorite-a.favorite})
    const trailsArray = this.state.trails.filter(trail => trail.location.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
    
    return (
      <div className="App">
        <div className="sticky">
        <NavBar 
          currentUser={this.state.currentUser} 
          handleLogout={this.handleLogout} />
        </div>
        
        <div className="main">
        {this.state.loading? <Spin size='large' /> :
        <Switch>
        <Route 
          exact path="/" 
          render={() => {
              return (< TrailsPage 
                          searchTerm={this.state.searchTerm} 
                          handleSearchTerm={this.handleSearchTerm} 
                          handlePatchHike={this.handlePatchHike} 
                          handleRemoveHike={this.handleRemoveHike} 
                          handleNewHike={this.handleNewHike} 
                          myHikes={this.state.myHikes} 
                          trails={trailsArray}/>)}} />
        <Route 
          exact path="/about" 
          component={About}/>
        <Route 
          exact path="/trails/:id" 
          render={ (routerProps) => {
                    let id = routerProps.match.params.id
                    let trailShow = this.state.trails.find(t => t.id === parseInt(id)) 
                    return (< TrailsShowPage 
                                deleteComment={this.deleteComment}
                                currentUser={this.state.currentUser}
                                postComment={this.postComment}
                                handlePatchHike={this.handlePatchHike} 
                                handleRemoveHike={this.handleRemoveHike} 
                                handleNewHike={this.handleNewHike} 
                                myHikes={this.state.myHikes} 
                                trail={trailShow} />)}} />
        <Route 
          exact path='/signup' 
          render={() => this.state.currentUser === null? <SignUpForm 
                                                            handleNewUser={this.handleNewUser}/> : <Redirect to="/myhikes"/>} />
        <Route 
          exact path="/myhikes" 
          render={() => this.state.currentUser === null ? 
                                          <Redirect to="/login" /> :  < MyHikesPage 
                                                                          searchTerm={this.state.searchTerm} 
                                                                          handleSearchTerm={this.handleSearchTerm}
                                                                          handleRemoveHike={this.handleRemoveHike}
                                                                          myHikes={myHikesArray}
                                                                          handlePatchHike={this.handlePatchHike} /> } />
       
        <Route 
          exact path="/login" 
          render={ () => 
              this.state.currentUser === null? < LoginForm 
                                                  changeCurrentUser={this.changeCurrentUser}/> : <Redirect to="/myhikes"/> } />
         <Route render={FourOhFour}/>
        </Switch>}
        </div>
    </div>
      )
   }
}

export default App;
