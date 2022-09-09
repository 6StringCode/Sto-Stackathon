import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import stays from '../store/stays';


class StayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyHousing: '',
      amenity: ''
    }
  }
  state = {  }
  render() { 
    const { companyHousing, amenity } = this.state;
    return (  
      <div>
        <h4>There are {this.props.tripStays.length} Stays</h4>
      </div>
    );
  }
}


const mapState = state => {
  return {
    stays: state.stays
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

export default connect(mapState, mapDispatch)(StayForm)
