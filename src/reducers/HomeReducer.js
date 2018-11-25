import { GET_TEXT } from '../actionTypes/HomeConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  loading: false,
  success: false,
  failure: false,
  text: null
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case asyncActionName(GET_TEXT).loading:
      return { ...state, failure: false, loading: action.payload };

    case asyncActionName(GET_TEXT).success:
      return { ...state, failure: false, success: true, text: action.payload };

    case asyncActionName(GET_TEXT).failure:
      return { ...state, failure: true };

    default:
      return state;
  }
};

export default homeReducer;
