import {
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
  GET_SERVICES,
} from './types';

const initialState = {
  users: [],
  user: {},
  services: [],
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
        user: action.payload,
      };
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
