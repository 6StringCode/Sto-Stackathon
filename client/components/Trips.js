import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const Trips = props => {
  const {trips} = props
  return (
    <div>
      <h3>All {trips.length} upcoming trips:</h3>
      <ul>
        {
          trips.map(trip => {
            return (
              <li key={trip.city}><Link>{trip.city} - {trip.hotel}</Link>. <b>Check in: </b> {trip.checkIn} <b>Check out: </b> {trip.checkOut}</li>
            )
          })
        }
      </ul>
    </div>
  )
}


const mapState = state => {
  return {
    trips: state.trips
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchTrips: ()=> {
      dispatch(fetchTrips())
    }
  }
}

export default connect(mapState, mapDispatch)(Trips)
