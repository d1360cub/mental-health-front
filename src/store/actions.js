/* eslint-disable no-debugger */
import {
  ADD_USER,
  GET_USERS,
} from './types';

import {
  newUser,
  listAllUsers,
} from '../services/user';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const getAllUsers = () => ({ type: GET_USERS, payload: user });

export const createUser = (user) => async (dispatch) => {
  const userCreated = await newUser(user);
  dispatch(addUser(userCreated));
};

export const showAllUsers = () => async (dispatch) => {
  const allUsers = await listAllUsers();
  dispatch(getAllUsers(allUsers));
};
