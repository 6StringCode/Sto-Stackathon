import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
//import { fetchTrips } from '../store/trips';

const Trip = props => {
  const {trip } = props
  return (
    <div>
      <h3>Details for {trip.city}'s upcoming stay:</h3>
      <ul>
        {/* { 
          trip.map(trip => {
            return (
              <li key={trip.id}>
                <Link to={`/trips/${trip.id}`}>{trip.city} - {trip.hotel}</Link>. <b>Check in: </b> {trip.checkIn} <b>Check out: </b> {trip.checkOut}</li>
            )
          })
        } */}
      </ul>
    </div>
  )
}


const mapDispatch = (dispatch) => {
  return {
    fetchTrips: ()=> {
      dispatch(fetchTrips())
    }
  }
}


const mapState = ({trips}, {match}) => {
  const id = match.params.id;
  const trip = trips.find( trip => trip.id === id * 1) || {};
  console.log(trip)
  return {
    trip
  }
}

export default connect(mapState, mapDispatch)(Trip)
