// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';

export const loginUser = (payload) => ({ type: LOGIN_USER, payload });
export const getUser = (payload) => ({ type: GET_USER, payload });
