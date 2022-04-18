import {
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
  GET_SERVICES,
  GET_APPOINTMENTS,
  GET_USER,
  RESERVE_APPOINTMENT,
  GET_HISTORY_PATIENT,
  GET_TASKS_PATIENT,
} from './types';

import {
  newUser,
  listAllUsers,
  login,
  getUser,
} from '../services/user';

import getAppointmentsByDoctorId from '../services/appointments';
import getAllServices from '../services/serviceServices';
import getCHistoryPatient from '../services/cHistory';
import getTasks from '../services/tasks';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const getAllUsers = (users) => ({ type: GET_USERS, payload: users });
export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const getServices = (services) => ({ type: GET_SERVICES, payload: services });
export const showByDoctorId = (appointments) => ({ type: GET_APPOINTMENTS, payload: appointments });
export const getUserId = (user) => ({ type: GET_USER, payload: user });
export const reserveOneAppointment = (date) => ({ type: RESERVE_APPOINTMENT, payload: date });
export const getHistoryPatient = (cHistory) => ({ type: GET_HISTORY_PATIENT, payload: cHistory });
export const getTasksPatient = (tasks) => ({ type: GET_TASKS_PATIENT, payload: tasks });

export const createUser = (user) => async (dispatch) => {
  const userCreated = await newUser(user);
  dispatch(addUser(userCreated));
};

export const showAllUsers = () => async (dispatch) => {
  const allUsers = await listAllUsers();
  dispatch(getAllUsers(allUsers));
};

export const validateUser = (user) => async (dispatch) => {
  const userLogon = await login(user);
  dispatch(loginUser(userLogon));
  return userLogon;
};

export const showAllServices = () => async (dispatch) => {
  const allServices = await getAllServices();
  dispatch(getServices(allServices));
};

export const showAppointByDocId = (id) => async (dispatch) => {
  const appointmentsForId = await getAppointmentsByDoctorId(id);
  dispatch(showByDoctorId(appointmentsForId));
};

export const getUserById = (id) => async (dispatch) => {
  const userById = await getUser(id);
  dispatch(getUserId(userById));
};

export const showHistoryPatient = (id) => async (dispatch) => {
  const historyPatient = await getCHistoryPatient(id);
  dispatch(getHistoryPatient(historyPatient));
};

export const showTasksPatient = (id) => async (dispatch) => {
  const tasksPatient = await getTasks(id);
  dispatch(getTasksPatient(tasksPatient));
};
