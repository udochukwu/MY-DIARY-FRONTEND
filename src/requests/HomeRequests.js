import axios from 'axios';

import { asyncActions } from '../util/AsyncUtil';
import { GET_TEXT } from '../actionTypes';

export const getText = payload => (dispatch) => {
  dispatch(asyncActions(GET_TEXT).loading(true));
  axios.get('https://randomuser.me/api/')
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.results[0].email, '+++++++++++++++++');
        dispatch(asyncActions(GET_TEXT).success(response.data.results[0].email));
      }
    })
    .catch((error) => {
      console.log(error, '+++++++++++++++++');
      dispatch(asyncActions(GET_TEXT).loading(false));
    });
};
