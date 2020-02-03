import React, {useState, useEffect} from 'react';

import axios from 'axios'
import { CardFieldset, Flightcards, CardButton  } from '../components/AdminSC';

export default function AdminAirlines() {

const [flightInfo, setCardInfo] = useState ([])


useEffect(() => {
    axios
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
  <h1>Airlines</h1>
   {flightInfo.map(flights =>
   <Flightcards key= {flights.id}>
    <h1>Airline Name: {flights.airline}</h1> 
    <h2>Airport : {flights.airport}</h2>
    <h2>Flight number: {flights.flight_number}</h2>
    <h3>Flight date: {flights.flight_date}</h3>
    <h3>Flight time: {flights.flight_time}</h3>
    <CardButton> Edit </CardButton>
    <CardButton> Delete </CardButton>
    </Flightcards>

    )}

</CardFieldset>
    );
}