/* eslint-disable no-underscore-dangle */
import {
  RESET,
  GET_SERVICES,
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
  GET_USER,
  UPDATE_LIST_USERS,
  GET_APPOINTMENTS,
  RESERVE_APPOINTMENT,
  GET_HISTORY_PATIENT,
  GET_TASKS_PATIENT,
  APPOINTMENTS_PATIENT,
  DELETE_APPOINTMENT,
} from './types';

const initialState = {
  users: [],
  user: {},
  patient: [],
  preAppointment: {},
  listAppointments: [],
  services: [],
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
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        listAppointments: action.payload,
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
    case APPOINTMENTS_PATIENT:
      return {
        ...state,
        listAppointments: action.payload,
      };
    case UPDATE_LIST_USERS:
      return {
        ...state,
        users: state.users.filter((element) => element._id !== action.payload),
      };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        listAppointments: state.listAppointments
          .filter((element) => element._id !== action.payload),
      };
    default:
      return state;
  }
}

export default reducers;
