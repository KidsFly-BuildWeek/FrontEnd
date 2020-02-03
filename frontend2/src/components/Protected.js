import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Card from './Card'



    // import Bubbles from "./Bubbles";
    // import ColorList from "./ColorList";
    
    const Protected = () => {
      const [colorList, setColorList] = useState([]);
    
      axiosWithAuth()
        .get("https://kids-fly-be.herokuapp.com/api")
        .then((res) => {
            console.log(res.data)
          setColorList(res.data);
        })
        .catch((err) => console.log("Error: ", err));
    
      return (
        <>
        Dashboard goes here
        <h1>Dashboard</h1>
        <h2>All Trips</h2>
        <h3>Add a manual trip</h3>
        <p>Trip 1 <span>edit</span> <span>delete</span></p>
        {/* <Card /> */}
         
        </>
      );
    };

export default Protected