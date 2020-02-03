import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Protected from './components/Protected'


function App() {
  return (
    <Router>
     <div className="App">
     <h1> KidsFly! </h1>
          <li>
          <Link to="/register">Register</Link><br></br>
            <Link to="/login">Login</Link><br></br>
            <Link to="/protected">Protected</Link>
          </li>

          <Switch> 
       <Route exact path="/login" component={AdminLogin} />
       <Route exact path="/register" component={AdminRegister} />
       <PrivateRoute exact path="/protected" component={Protected} /> 
     
      </Switch>
     </div>
   </Router>
  );
}

export default App;