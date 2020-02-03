

import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class AddFlight extends React.Component {
    state = {
        flight: {
            id: Date.now(),
            airline: '',
            airport: '',
            flight_number: '',
            flight_date:'',
            flight_time:''
        }
    }

    handleChange = e => {
        this.setState({
            flight: {
                ...this.state.flight,
                [e.target.name]: e.target.value
             
            }
           
        });
    };

    makeFlight = e => {
        e.preventDefault();
        axiosWithAuth()
        .post
        ("https://kids-fly-be.herokuapp.com/api/flights/", 
        
        this.state.flight)
     
        .then(res => {
            console.log(res)
            this.props.history.push('/admin');
        })
    }

    render() {
        return (
            <div>
                <h2>Create a new Flight</h2>
                <form onSubmit={this.makeFlight}>
                    Airline:
                    <input 
                    type='text' 
                    name='airline' 
                    value={this.state.flight.airline} 
                    onChange={this.handleChange}
                    />
                   Airport:
                    <input type='text' 
                    name='airport' 
                    value={this.state.flight.airport} 
                    onChange={this.handleChange} 
                    />
                   Flight Number:
                    <input 
                    type='text' 
                    name='flight_number' 
                    value={this.state.flight_number} 
                    onChange={this.handleChange} 
                    />

Date:
                    <input 
                    type='text' 
                    name='flight_number' 
                    value={this.state.flight_date} 
                    onChange={this.handleChange} 
                    />

Time:
                    <input 
                    type='text' 
                    name='flight_number' 
                    value={this.state.flight_time} 
                    onChange={this.handleChange} 
                    />
                    <button>Add Airline</button>
                </form>
            </div>
        )
    }
}

export default AddFlight