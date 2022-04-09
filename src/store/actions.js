import {
  ADD_USER,
  GET_USERS,
  LOGIN_USER,
} from './types';

import {
  newUser,
  listAllUsers,
  login,
} from '../services/user';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const getAllUsers = (users) => ({ type: GET_USERS, payload: users });
export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });

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
