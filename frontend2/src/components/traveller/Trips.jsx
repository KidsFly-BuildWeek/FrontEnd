import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import {
  Card,
  CardText,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import EditTrip from "./EditTrip";
import { connect } from "react-redux";
import { getTrips, deleteTripById } from "../../state/actionCreators";

export function Trips({ trips, getTrips }) {
  // const [trips, setTrips] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editValues, setEditValues] = useState({});

  const toggle = () => setEditModal(!editModal);

  useEffect(() => {
    withAuth()
      .get("https://kids-fly-be.herokuapp.com/api/flights")
      .then(res => {
        console.log(res);
        getTrips(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
    getTrips();
  }, [getTrips]);

  const editTrip = id => {
    setEditValues(trips.find(trip => trip.id === id));
    toggle();
  };

  const deleteTrip = flight_number => {
    withAuth()
      .delete(`https://kids-fly-be.herokuapp.com/api/flights/${flight_number}`)
      .then(res => {
        // setTrips(trips.filter(trip => trip.id !== id));
        deleteTripById(flight_number);
        console.log(res)
        alert("Trip deleted");
        const something = res;
        return something;
      })
      .then(something => {
        getTrips();
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <>
      {trips.map(trip => {
        return (
          <Card key={trip.id} className="mt-3">
            <CardBody>
              <CardText>
             
                
                   <h1>Flight date: {trip.flight_date}</h1>
                    <h1>Flight time: {trip.flight_time}</h1>
                    <h2>Airport : {trip.airport}</h2>
                    <h2>Airline Name: {trip.airline}</h2> 
                    <h2>Flight number: {trip.flight_number}</h2>
                    </CardText>
              <Button
                color="primary"
                onClick={event => {
                  event.preventDefault();
                  editTrip(trip.id);
                }}
              >
                Edit trip
              </Button>
              <Button
                color="danger"
                className="ml-2"
                onClick={event => {
                  event.preventDefault();
                  deleteTrip(trip.flight_number);
                }}
              >
                Delete Trip
              </Button>
            </CardBody>
          </Card>
        );
      })}

      <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit your Trip</ModalHeader>
        <ModalBody>
          <EditTrip editValues={editValues} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { getTrips, deleteTripById })(Trips);
