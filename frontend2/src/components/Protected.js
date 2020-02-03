import React from "react";
import {Link} from 'react-router-dom';
// import {axiosWithAuth} from '../utils/axiosWithAuth'
// import Card from './Card'

import AdminAirlines from '../actions/AdminAirlines'


    // import Bubbles from "./Bubbles";
    // import ColorList from "./ColorList";
    
    const Protected = () => {
      // const [colorList, setColorList] = useState([]);
    
    //   axiosWithAuth()
    //     .get("https://kids-fly-be.herokuapp.com/api")
    //     .then((res) => {
    //         console.log(res.data)
    //       setColorList(res.data);
    //     })
    //     .catch((err) => console.log("Error: ", err));
    
      return (
        <>
     
        <h1>Dashboard</h1>
        <Link to ="/adminairlines" component={AdminAirlines}>All Trips</Link>
        <h3><a href ="/add">Add a manual Trip </a> </h3>
        <p><a href ="/card">Trip 1 </a> <span><a href ="/edit">edit </a> </span> <span><a href ="/delete">delete </a> </span></p>
      ]
         
        </>
      );
    };

export default Protected