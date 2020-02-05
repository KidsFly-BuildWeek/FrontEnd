import React, {useState, useEffect} from 'react';

import { CardFieldset, Flightcards, CardButton  } from '../components/AdminSC';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export default function AdminAirlines() {

const [flightInfo, setCardInfo] = useState ([])

const deleteFlight = (flight) => {
axiosWithAuth()
.delete(`/flight/${flight.id}`, flight)
.then((res) => console.log(res))
.catch((err) => console.log(err));
};


useEffect(() => {
    axiosWithAuth()
    .get("https://kids-fly-be.herokuapp.com/api/flights")
    .then(res => {
        console.log(res.data)
        setCardInfo(res.data)
    })
    .catch(err => {
        console.error(err); 
    })
}, []) 

    return (
<CardFieldset >
  <h1>Current Trips</h1>
   {flightInfo.map(flights =>
   <Flightcards key= {flights.id}>

   
    
    <h1>Flight date: {flights.flight_date}</h1>
    <h1>Flight time: {flights.flight_time}</h1>
    <h2>Airport : {flights.airport}</h2>
    <h2>Airline Name: {flights.airline}</h2> 
    <h2>Flight number: {flights.flight_number}</h2>
    <CardButton> <a href="/edit">Edit </a> </CardButton>
    

    <CardButton><a href="/delete"> Delete </a></CardButton>

    <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFlight(flights.id);
                }}
              >
                Delete
              </span>


    </Flightcards>

    )}

</CardFieldset>
    );
}