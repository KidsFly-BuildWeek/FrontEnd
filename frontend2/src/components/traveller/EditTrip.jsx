import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateTrips } from "../../state/actionCreators";

export function EditTrip({ editValues, updateTrips, toggle }) {
  const [formValues, setFormValues] = useState({
    airline: '',
    airport: '',
    flight_number: '',
    flight_date:'',
    flight_time:''
  });

  useEffect(() => {
    setFormValues(editValues);
  }, []);

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const payload = {
      ...formValues
    };
    withAuth()
      .put(`https://kids-fly-be.herokuapp.com/api/flights/${editValues.id}`, payload)
      .then(res => {
        updateTrips({ ...formValues });
        alert("Trip Edited");
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
          value={formValues.airport}
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
          value={formValues.airline}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="departure_time">Departure Time</Label>
        <Input
          type="text"
          name="flight_time"
          id="flight_time"
          placeholder="flight_time"
          onChange={handleChange}
          value={formValues.flight_time}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="flight_number">Flight Number</Label>
        <Input
          type="text"
          name="flight_number"
          id="flight_number"
          placeholder="kids"
          onChange={handleChange}
          value={formValues.flight_number}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="flight_number">Flight Date</Label>
        <Input
          type="text"
          name="flight_date"
          id="flight_date"
          placeholder="flightdate"
          onChange={handleChange}
          value={formValues.flight_number}
          required
        />
      </FormGroup>



      <Button onClick={onSubmit} color="success">Save Trip</Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { updateTrips })(EditTrip);
