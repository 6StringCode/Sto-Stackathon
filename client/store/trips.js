import axios from 'axios';

const trips = (state = [], action)=> {
    if(action.type === 'SET_TRIPS'){
        return action.trips;
    }
    return state;
};

export const fetchTrips = ()=> {
    return async(dispatch) => {
        const trips = (await axios.get('/api/trips')).data;
        dispatch({ type: 'SET_TRIPS', trips });
    }
}


export default trips;