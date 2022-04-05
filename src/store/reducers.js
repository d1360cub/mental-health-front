import {
  ADD_USER,
} from './types';

const initialState = {
  users: [],
};

// eslint-disable-next-line default-param-last
function reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state.users,
        users: [action.payload, ...state],
      };
    default:
      return state;
  }
}

export default reducers;
