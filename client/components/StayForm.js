import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStay } from '../store/stays';


class StayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenity: '',
      quantity: '',
    }
    this.save = this.save.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidUpdate(prevProps) {
    if(!prevProps && this.props){
      this.props.loadData()
    }
  }

  onChange(ev) {
    //console.log(ev.target)
    this.setState({
      [ev.target.name]: ev.target.value
      
    });
  }   
  async save(ev) {
    ev.preventDefault();
    const newStay = {
        amenity: this.state.amenity,
        quantity:  this.state.quantity,
        tripId: this.props.trip.id,
    };
    console.log(newStay)
    this.props.createStay(newStay);
    
    this.setState({
        amenity: '',
        quantity: ''
    })
  }
  render() { 
    const { amenity, quantity } = this.state;
    const { save, onChange } = this;
    return (  
      <div>
        <h4>Bonus Amenities</h4>
        <div className="control-group">
          <label>Amenity</label>
          <select 
              className="form-control" 
              name='amenity'
              value={ amenity }
              onChange={ onChange }
              >
                <option value=''>Select an option</option>
                <option value='KITCHENETTE'>Kitchenette</option>
                <option value='KITCHEN'>Kitchen</option>
                <option value='MICROWAVE'>Microwave</option>
          </select><br />
        </div>
        <div className="control-group">
          <label>Quantity</label>
          <input 
              className="form-control" 
              required
              name='quantity'
              value={ quantity }
              onChange={ onChange }
              >
          </input><br />
        </div>
        <div className='text-center'>
          <button onClick={ save } className="btn btn-primary py-2 px-4 ml-5" >Save</button>
        </div>
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
    },
    createStay: (stay) => dispatch(createStay(stay))
  }
}

export default connect(mapState, mapDispatch)(StayForm)
