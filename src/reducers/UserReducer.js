import { SIGNUP, LOGIN } from '../actionTypes/UserConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  loading: false,
  success: false,
  failure: false,
  isAuth: false,
  user: {},
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
        ...state, errors: action.payload.error, failure: action.payload.status, loading: false
      };
    case asyncActionName(LOGIN).loading:
      return {
        ...state, loading: action.payload, failure: false
      };
    case asyncActionName(LOGIN).success:
      return {
        ...state, success: true, failure: false, isAuth: true, user: action.payload.user
      };
    case asyncActionName(LOGIN).failure:
      return {
        ...state, errors: action.payload.error, failure: action.payload.status, loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
