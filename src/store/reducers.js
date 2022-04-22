import {
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
  LOGOUT_USER,
  GET_SERVICES,
  GET_APPOINTMENTS,
  GET_USER,
  RESERVE_APPOINTMENT,
  GET_HISTORY_PATIENT,
  RESET,
  GET_TASKS_PATIENT,
} from './types';

const initialState = {
  users: [],
  user: {},
  services: [],
  appointments: [],
  patient: [],
  preAppointment: {},
  cHistory: [],
  tasks: [],
};

// eslint-disable-next-line default-param-last
function reducers(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        preAppointment: initialState.preAppointment,
      };
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
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        patient: action.payload,
      };
    case RESERVE_APPOINTMENT:
      return {
        ...state,
        preAppointment: action.payload,
      };
    case GET_HISTORY_PATIENT:
      return {
        ...state,
        cHistory: action.payload,
      };
    case GET_TASKS_PATIENT:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
