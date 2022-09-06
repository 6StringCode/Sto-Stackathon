import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = props => {
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
              <li key={trip.city}><Link>{trip.city} - {trip.hotel}</Link>. Check in {trip.checkIn} Check out {trip.checkOut}</li>
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
