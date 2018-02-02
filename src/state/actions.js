export const INITIAL_VIEW = 'INITIAL_VIEW'
export const GET_USERS = 'GET_USERS'
export const SELECTED_USER = 'SELECTED_USER'
export const EDIT_USER = 'EDIT_USER'

export const initialView = (payload) => {
  return {type: INITIAL_VIEW, payload}
};

export const getUsers = (payload) => {
  return {type: GET_USERS, payload}
};

export const selectedUser = (payload) => {
  return {type: SELECTED_USER, payload}
};

export const editUser = (payload) => {
  return {type: EDIT_USER, payload}
};

