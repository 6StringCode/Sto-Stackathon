import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateTripForm from './CreateTripForm'


const Trips = props => {
  const {trips} = props
  return (
    <div>
      <div>
        <h3>All {trips.length} upcoming trips:</h3>
        <ul>
          {
            trips.map(trip => {
              return (
                <li key={trip.id}>
                  <Link to={`/trips/${trip.id}`}>{trip.city} - {trip.hotel}</Link>. <b>Check in: </b> {trip.checkIn} <b>Check out: </b> {trip.checkOut}</li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <CreateTripForm />
      </div>
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
