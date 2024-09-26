// redux/actions.js
import axios from 'axios';
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './actionTypes';

const API_URL = 'https://courselearningbackend.saeedantechpvt.com/api/';
export const registerUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const response = await axios.post(`${API_URL}register`, userData);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data,
            });
            localStorage.setItem('token', response.data.token); // Store token
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.response ? error.response.data : 'Server Error',
            });
        }
    };
};

// Login Action
export const loginUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const response = await axios.post(`${API_URL}/login`, userData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            });
            localStorage.setItem('token', response.data.token); // Store token
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response ? error.response.data : 'Server Error',
            });
        }
    };
};
