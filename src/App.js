import React,{useEffect,useContext} from "react";

//import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import  Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import "./App.css";
import {AuthContext, FirebaseContext} from './store/Context'
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    //console.log(user)
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })


  })


/*function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
       </Route>
      </Router>
    </div>
  );
}*/


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
