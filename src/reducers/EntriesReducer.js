import { ALL_ENTRIES, CREATE_ENTRY, DELETE_ENTRY } from '../actionTypes/EntriesConstants';
import { asyncActionName } from '../util/AsyncUtil';


const initialState = {
  loading: false,
  success: false,
  failure: false,
  entries: [],
  entry: {},
  errors: {}
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
    case asyncActionName(CREATE_ENTRY).loading:
      return {
        ...state, loading: action.payload, failure: false
      };
    case asyncActionName(CREATE_ENTRY).success:
      return {
        ...state, success: true, loading: false, failure: false, entry: action.payload
      };
    case asyncActionName(CREATE_ENTRY).failure:
      return {
        ...state, errors: action.payload.error, failure: true, loading: false,
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
