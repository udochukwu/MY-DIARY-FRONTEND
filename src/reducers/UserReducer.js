import { SIGNUP } from '../actionTypes/UserConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  loading: false,
  success: false,
  failure: false,
  errors: {}
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case asyncActionName(SIGNUP).loading:
      return {
        ...state, loading: action.payload, failure: false
      };
    case asyncActionName(SIGNUP).success:
      return {
        ...state, success: action.payload, failure: false
      };
    case asyncActionName(SIGNUP).failure:
      return {
        ...state, errors: action.payload.error, failure: action.payload.status
      };
    default:
      return state;
  }
};

export default userReducer;
