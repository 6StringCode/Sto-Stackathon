import axios from 'axios';

const trips = (state = [], action)=> {
    if(action.type === 'SET_TRIPS'){
        return action.trips;
    }
    if(action.type === 'CREATE_TRIP'){
        return [...state, action.trip]
    }
    if(action.type === 'UPDATE_TRIP'){
        return state.map((trip) => trip.id === action.trip.id ? action.trip: trip);
      }
    return state;
};

export const fetchTrips = ()=> {
    return async(dispatch) => {
        const trips = (await axios.get('/api/trips')).data;
        dispatch({ type: 'SET_TRIPS', trips });
    }
}

export const createTrip = (trip) => {
    return async(dispatch) => {
      const token = window.localStorage.getItem('token');
      if(token) {
        trip = (await axios.post('/api/trips', trip, {
          headers: {
            authorization: token
          }
        })).data;
        dispatch({ type: 'CREATE_TRIP', trip })
      }
    };
};

export const updateTrip = (trip) => {
    return async(dispatch) => {
        const token = window.localStorage.getItem('token');
        if(token) {
        trip = (await axios.put(`/api/trips/${ trip.id }`, trip, {
            headers: {
            authorization: token
            }
        })).data;
        dispatch({ type: 'UPDATE_TRIP', trip })
        }
    }
}

export default trips;