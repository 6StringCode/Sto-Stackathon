import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const Trip = props => {
  const {trips} = props
  console.log(trips);
  return (
    <div>
      <h3>Hello {trips} </h3>
      
    </div>
  )
}


const mapState = ({ trips }, ownProps) => {
  const id = ownProps.match.params.id;
  const trip = trips.find( trip => trip.id === id * 1) || {};
  return {
    //trip
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
