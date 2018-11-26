import { ALL_ENTRIES, DELETE_ENTRY } from '../actionTypes/EntriesConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  loading: false,
  success: false,
  failure: false,
  entries: [],
};

const entriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case asyncActionName(ALL_ENTRIES).loading:
      return {
        ...state, loading: action.payload, failure: false
      };
    case asyncActionName(ALL_ENTRIES).success:
      return {
        ...state, success: true, failure: false, entries: action.payload
      };
    case asyncActionName(ALL_ENTRIES).failure:
      return {
        ...state, errors: action.payload, failure: action.payload.status
      };
    case asyncActionName(DELETE_ENTRY).success:
      return {
        ...state, success: true
      };
    default:
      return state;
  }
};

export default entriesReducer;
