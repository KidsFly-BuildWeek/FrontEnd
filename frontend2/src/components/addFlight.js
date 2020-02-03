import React from 'react';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
// import {addTrucks} from '../actions';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import styled from 'styled-components'

const Button = styled.button `
background-color: green
`

const Container = styled.div `

`


const AddFlight = (props) => {
    const { register, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
      const newColor = {
        code: {
          hex: data.hex
        },
        color: data.color
      };
  
      e.target.reset();
      axiosWithAuth()
        .post("/colors", newColor)
        .then((res) => 
        console.log(res))
        .catch((err) => 
        console.log(err));
    };
  
    return (
      <>
        <Formon onSubmit={handleSubmit(onSubmit)}>
          <legend>add color</legend>
          <label>
            color name:
            <input type="text" name="color" ref={register} />
          </label>
          <br />
  
          <label>
            hex code:
            <input type="text" name="hex" ref={register} />
          </label>
          <br />
  
          <input type="submit" value="add" />
        </Formon>
      </>
    );
  };
  
  export default AddFlight;