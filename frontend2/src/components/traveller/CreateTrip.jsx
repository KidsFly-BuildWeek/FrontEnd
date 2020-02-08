import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import withAuth from "../../helpers/axios";
import { addTrip } from "../../state/actionCreators";
import { connect } from "react-redux";

export function CreateTrip({ addTrip, toggle }) {
  const [formValues, setFormValues] = useState({
    airline: '',
    airport: '',
    flight_number: '',
    flight_date:'',
    flight_time:''
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    const newTrip = {
      ...formValues
    };
    console.log(newTrip);
    withAuth()
      .post("https://kids-fly-be.herokuapp.com/api/flights/", newTrip)
      .then(res => {
        addTrip(newTrip);
        alert("Created a new Trip");
        toggle();
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="airport">Airport</Label>
        <Input
          type="text"
          name="airport"
          id="airport"
          placeholder="Airport"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="airline">Airline</Label>
        <Input
          type="text"
          name="airline"
          id="airline"
          placeholder="airline"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="flight_time">Flight Number</Label>
        <Input
          type="text"
          name="flight_number"
          id="flight_number"
          placeholder="flight number"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="flight_time">Flight Time</Label>
        <Input
          type="text"
          name="flight_time"
          id="flight_time"
          placeholder="flight time"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="kids">Flight Date</Label>
        <Input
          type="text"
          name="flight_date"
          id="flight_date"
          placeholder="flight_date"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button onClick={onSubmit} color="success">Create Trip</Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { addTrip })(CreateTrip);
