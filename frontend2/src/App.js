import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';

import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import PrivateRoute from './components/PrivateRoute';
import Card from './components/Card'
import Protected from './components/Protected'
import AddFlight from './actions/addFlight'
import EditFlight from "./actions/editFlight"
import DeleteFlight from "./actions/deleteFlight"



function App() {
  return (
  
     <div className="App">
     <h1> KidsFly! </h1>
          <li>
          <Link to="/register">Register</Link><br></br>
            <Link to="/login">Login</Link><br></br>
            <Link to="/admin">Admin Dashboard</Link>
          </li>

          <Switch> 
       <Route exact path="/login" component={AdminLogin} />
       <Route exact path="/register" component={AdminRegister} />
       <PrivateRoute exact path="/admin" component={Protected} /> 
       <PrivateRoute exact path="/card" component={Card} /> 
       <PrivateRoute exact path="/add" component={AddFlight} />
       <PrivateRoute exact path="/edit" component={EditFlight} />
       <PrivateRoute exact path="/delete" component={DeleteFlight} />
      </Switch>
     </div>
  
  );
}

export default App;