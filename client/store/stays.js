import axios from 'axios';

const stays = (state = [], action)=> {
    if(action.type === 'SET_STAYS'){
        return action.stays;
    }
    if(action.type === 'CREATE_STAY'){
      return [...state, ...action.stay]
  }
    return state;
};

export const fetchStays = ()=> {
    return async(dispatch) => {
        const stays = (await axios.get('/api/stays')).data;
        dispatch({ type: 'SET_STAYS', stays });
    }
}

export const createStay = (stay) => {
    return async(dispatch) => {
      const token = window.localStorage.getItem('token');
      if(token) {
        stay = (await axios.post('/api/stays', stay, {
          headers: {
            authorization: token
          }
        })).data;
        dispatch({ type: 'CREATE_STAY', stay })
        }
    }
};

export default stays;