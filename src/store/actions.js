/* eslint-disable no-debugger */
import {
  ADD_USER,
  ADD_USER_SUCCESS,
} from './types';

import { newUser } from '../services/user';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const addUserSuccess = (user) => ({ type: ADD_USER_SUCCESS, payload: user });

export const createUser = (user) => async (dispatch) => {
  const userCreated = await newUser(user);
  dispatch(addUser(userCreated));
};
