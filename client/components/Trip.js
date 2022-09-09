import React from 'react'
import {connect} from 'react-redux'
import CreateTripForm from './CreateTripForm'
// import { Link } from 'react-router-dom'
import StayForm from './StayForm'

const Trip = props => {
  const { trip, tripStays } = props
  //console.log(stays)
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
        <h4 className='text-center'>Edit City Info</h4>
        <CreateTripForm trip={ trip }/>
        <StayForm tripStays={ tripStays }/>
      <ul>
        {
          tripStays.map(stay => {
            return (
              <li key={stay.id}>
                {stay.amenity}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapState = ({trips, stays}, {match}) => {
  const id = match.params.id;
  const trip = trips.find( trip => trip.id === id * 1) || {};
  console.log(stays);
  const tripStays = stays.filter( stay => stay.tripId === trip.id) || [];
  return {
    trip,
    tripStays
  
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
