import { combineReducers } from 'redux';
import entries from './EntriesReducer';
import user from './UserReducer';

const rootReducer = combineReducers({
  user, entries
});

export default rootReducer;
