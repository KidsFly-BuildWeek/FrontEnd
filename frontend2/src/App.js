import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';
import { Big, Listed, Back, StyledLink } from './components/Styling'
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import PrivateRoute from './components/PrivateRoute';
import Card from './components/Card'
import Protected from './components/Protected'
import AddFlight from './actions/AddFlight'
import EditFlight from "./actions/EditFlight"
import DeleteFlight from "./actions/DeleteFlight"



function App() {
  return (
    <Back className="App">
      <Big> KidsFly! </Big>
      <Listed>
        <StyledLink to="/register">Register</StyledLink><br></br>
      </Listed>
      <Listed>
        <StyledLink to="/login">Login</StyledLink><br></br>
      </Listed>
      <Listed>
        <StyledLink to="/admin">Admin Dashboard</StyledLink>
      </Listed>

      <Switch>
        <Route exact path="/login" component={AdminLogin} />
        <Route exact path="/register" component={AdminRegister} />
        <PrivateRoute exact path="/admin" component={Protected} />
        <PrivateRoute exact path="/card" component={Card} />
        <PrivateRoute exact path="/add" component={AddFlight} />
        <PrivateRoute exact path="/edit" component={EditFlight} />
        <PrivateRoute exact path="/delete" component={DeleteFlight} />
      </Switch>
    </Back>
  );
}

export default App;