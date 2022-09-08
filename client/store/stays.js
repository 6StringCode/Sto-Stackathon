import axios from 'axios';

const stays = (state = [], action)=> {
    if(action.type === 'SET_STAYS'){
        return action.stays;
    }
    return state;
};

export const fetchStays = ()=> {
    return async(dispatch) => {
        const stays = (await axios.get('/api/stays')).data;
        dispatch({ type: 'SET_STAYS', stays });
    }
}


export default stays;