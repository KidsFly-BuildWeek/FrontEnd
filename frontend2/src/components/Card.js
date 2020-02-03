import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { CardFieldset } from './AdminSC';

export default function Card() {

const [cardInfo, setCardInfo ] = useState ()

// useEffect(() => {
//     axiosWithAuth
//     .post(url,params)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.error(err); 
//     })
// }) 

    return (
<div>
    <h1>
       <p >
Card goes here

       </p>
    </h1>
</div>
    );
}