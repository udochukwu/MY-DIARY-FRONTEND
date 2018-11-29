import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { asyncActions } from '../util/AsyncUtil';
import { SIGNUP, LOGIN } from '../actionTypes';
import { signupConstant } from '../constants/Constants';
import setAuthToken from '../util/AuthTokenUtil';


export const signup = payload => (dispatch) => {
  dispatch(asyncActions(SIGNUP).loading(true));
  return axios.post(signupConstant.SIGNUP_URL, payload)
    .then((response) => {
      dispatch(asyncActions(SIGNUP).loading(false));
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        dispatch(asyncActions(SIGNUP).success(true));
      }
      return response;
    })
    .catch((error) => {
      if (error.response.status === 409) {
        const errors = {};
        errors.errors = error.response.data.errors;
        dispatch(asyncActions(SIGNUP).failure(true, errors));
      } else {
        dispatch(asyncActions(SIGNUP).loading(false));
        dispatch(asyncActions(SIGNUP).failure(true, error.response.data));
      }
      throw error;
    });
};

export const login = payload => (dispatch) => {
  dispatch(asyncActions(LOGIN).loading(true));
  return axios.post(signupConstant.LOGIN_URL, payload)
    .then((response) => {
      dispatch(asyncActions(LOGIN).loading(false));
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        dispatch(asyncActions(LOGIN).success(jwtDecode(response.data.token)));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(LOGIN).loading(false));
      dispatch(asyncActions(LOGIN).failure(true, error.response.data));
      throw error;
    });
};
