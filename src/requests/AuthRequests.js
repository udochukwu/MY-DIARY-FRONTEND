import axios from 'axios';
import { asyncActions } from '../util/AsyncUtil';
import { SIGNUP } from '../actionTypes';
import { signupConstant } from '../constants/Constants';


export const signup = payload => (dispatch) => {
  dispatch(asyncActions(SIGNUP).loading(true));
  return axios.post(signupConstant.SIGNUP_URL, payload)
    .then((response) => {
      dispatch(asyncActions(SIGNUP).loading(false));
      if (response.status === 201) {
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
