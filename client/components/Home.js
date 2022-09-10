import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
const Home = props => {
  const {fullName, trips} = props
  console.log(trips);
  return (
    <div>
      <h3>Welcome, {fullName}</h3>
      <h3>You have {trips.length} upcoming trips:</h3>
      <ul>
        {
          trips.map(trip => {
            return (
              <li key={trip.city}><Link to={`/trips/${trip.id}`}>{trip.city} - {trip.hotel}</Link>. <b>Check in: </b> {trip.checkIn} <b>Check out: </b> {trip.checkOut}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    fullName: state.auth.fullName,
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

export default connect(mapState, mapDispatch)(Home)
