import React, { Component } from "react";
import { connect } from "react-redux";
import { createTrip } from '../store/trips';


class CreateTripForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            hotel: '',
            checkIn: '',
            checkOut: ''
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
        this.setState({
          [ev.target.name]: ev.target.value,
        });
    }   
    async save(ev) {
        ev.preventDefault();
        const newTrip = {
            city: this.state.city,
            hotel: this.state.hotel,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut
        };
        this.props.createTrip(newTrip);
        this.setState({
            city: '',
            hotel: '',
            checkIn: '',
            checkOut: ''
        })
    }
    render() {
        const { city, hotel, checkIn, checkOut } = this.state;
        const { save, onChange } = this;
        return (
            <div>
                <h4 className='text-center'>Add a New Trip</h4>
                <form onSubmit={ save }>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>City</p>
                        <input 
                            className="form-control" 
                            placeholder="required" 
                            name='city' 
                            value={ city } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Hotel</p>
                        <input 
                            className="form-control" 
                            placeholder="required" 
                            name='hotel'
                            value={ hotel } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>CheckIn</p>
                        <input 
                            className="form-control" 
                            type="date"
                            name="checkIn"
                            value={ checkIn } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>CheckOut</p>
                        <input 
                            className="form-control" 
                            type="date"
                            name="checkOut"
                            value={ checkOut } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary py-2 px-4 ml-5" disabled={ !city || !checkIn || !checkOut }>Save</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        createTrip: (trip) => dispatch(createTrip(trip, history)),
        loadData() {
            dispatch(fetchTrips()),
            dispatch(fetchUsers())
          }
    }
}

export default connect(state => state, mapDispatchToProps)(CreateTripForm);