import axios from 'axios';

const users = (state = [], action)=> {
    if(action.type === 'SET_USERS'){
        return action.users;
    }
    if(action.type === 'CREATE_USER'){
        return [...state, action.user]
    }
    if(action.type === 'UPDATE_USER'){
      return state.map((user) => user.id === action.user.id ? action.user: user);
    }
    return state;
};


export const fetchUsers = ()=> {
    return async(dispatch) => {
        const users = (await axios.get('/api/users')).data;
        dispatch({ type: 'SET_USERS', users });
    }
}

export const createUser = (user) => {
    return async(dispatch) => {
      const token = window.localStorage.getItem('token');
      if(token) {
        user = (await axios.post('/api/users', user, {
          headers: {
            authorization: token
          }
        })).data;
        dispatch({ type: 'CREATE_USER', user })
      }
    };
  };

export const updateUser = (user) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      user = (await axios.put(`/api/users/${ user.id }`, user, {
        headers: {
          authorization: token
        }
      })).data;
      dispatch({ type: 'UPDATE_USER', user })
    }
  }
}

export default users;