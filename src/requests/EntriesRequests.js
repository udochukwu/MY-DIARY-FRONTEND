import axios from 'axios';
import { asyncActions } from '../util/AsyncUtil';
import { ALL_ENTRIES, DELETE_ENTRY, CREATE_ENTRY } from '../actionTypes/EntriesConstants';
import { entriesConstant } from '../constants/Constants';

export const createEntry = payload => (dispatch) => {
  dispatch(asyncActions(CREATE_ENTRY).loading(true));
  return axios.post(entriesConstant.ENTRIES_URL, payload)
    .then((response) => {
      if (response.status === 201) {
        dispatch(asyncActions(CREATE_ENTRY).success(response.data.entries));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(CREATE_ENTRY).failure(true, error.response.data.errors));
      throw error;
    });
};

export const getEntries = payload => (dispatch) => {
  dispatch(asyncActions(ALL_ENTRIES).loading(true));
  return axios.get(entriesConstant.ENTRIES_URL)
    .then((response) => {
      dispatch(asyncActions(ALL_ENTRIES).loading(false));
      if (response.status === 200) {
        const entries = response.data.entries.reverse();
        dispatch(asyncActions(ALL_ENTRIES).success(entries));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(ALL_ENTRIES).loading(false));
      dispatch(asyncActions(ALL_ENTRIES).failure(true, error.response.data));
      throw error;
    });
};

export const deleteEntry = payload => (dispatch) => {
  dispatch(asyncActions(DELETE_ENTRY).loading(true));
  return axios.delete(`${entriesConstant.ENTRIES_URL}/${payload}`)
    .then((response) => {
      dispatch(asyncActions(DELETE_ENTRY).loading(false));
      if (response.status === 200) {
        dispatch(asyncActions(DELETE_ENTRY).success(response.data.entries));
        dispatch(getEntries(payload));
      }
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(DELETE_ENTRY).loading(false));
      dispatch(asyncActions(DELETE_ENTRY).failure(true, error.response.data));
      throw error;
    });
};
