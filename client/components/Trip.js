import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'

const Trip = props => {
  const {trip } = props
  return (
    <div>
      <h3>Details for {trip.city}'s upcoming stay:</h3>
      <div>
        {trip.hotel}
      </div>
      <div>
        Checking in: {trip.checkIn}
      </div>
      <div>
        Checking Out: {trip.checkOut}
      </div>
    </div>
  )
}


const mapDispatch = (dispatch) => {
  return {
    fetchTrips: ()=> {
      dispatch(fetchTrips())
    },
    fetchStays: ()=> {
      dispatch(fetchStays())
    }
  }
}


const mapState = ({trips}, {stays}, {match}) => {
  const id = match.params.id;
  const trip = trips.find( trip => trip.id === id * 1) || {};
  const stays = stays.find( stay => stay.tripId === trip.id) || {};
  console.log(trip)
  return {
    trip
  }
}

export default connect(mapState, mapDispatch)(Trip)
