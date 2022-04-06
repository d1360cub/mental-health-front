import {
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
} from './types';

const initialState = {
  users: [],
};

// eslint-disable-next-line default-param-last
function reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
