import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const Trip = props => {
  const {trips} = props
  return (
    <div>
      <h3>{trips.city} </h3>
      
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

export default connect(mapState, mapDispatch)(Trip)
