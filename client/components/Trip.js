import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'

const Trip = props => {
  const {trip, stays } = props
  console.log(props)
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
      <ul>
        {/* {
          stays.map(stay => {
            return (
              <li key={stay.id}>
                {stay.amenity}
              </li>
            )
          })
        } */}
      </ul>
    </div>
  )
}

const mapState = ({trips}, {match}) => {
  const id = match.params.id;
  const trip = trips.find( trip => trip.id === id * 1) || {};
  //const stays = stays.find( stay => stay.tripId === trip.id) || {};
  return {
    trip,

  
  }
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


export default connect(mapState, mapDispatch)(Trip)
