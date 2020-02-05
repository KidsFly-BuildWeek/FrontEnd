import React from "react";
import {Link} from 'react-router-dom';


import AdminAirlines from '../actions/AdminAirlines'
    
    const Protected = () => {

    
      return (
        <>
     
        <h1>Dashboard</h1>
        <h3><a href ="/add">Add a manual Trip </a> </h3>
        <Link to ="/adminairlines" component={AdminAirlines}>All Trips</Link>
         
        </>
      );
    };

export default Protected