import { combineReducers } from 'redux';

import {
  SHYNEE_INFO_REQUEST,
  SHYNEE_INFO_SUCCESS,
  SHYNEE_INFO_FAILURE,
  SHYNEE_SETTINGS_REQUEST,
  SHYNEE_SETTINGS_SUCCESS,
  SHYNEE_SETTINGS_FAILURE,
  SHYNEE_IS_READY
} from '../actions/shynee';

import { SHYNEE_SIGN_UP } from '../actions/auth';

const initialState = {
  fetching: false,
  error: false,
  data: null
};

function info (state = initialState, {type, payload}) {
  switch (type) {
  case SHYNEE_INFO_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case SHYNEE_INFO_SUCCESS:
    payload.avatarUri = 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg';
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case SHYNEE_INFO_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  case SHYNEE_SIGN_UP:
    return {
      ...state,
      fetching: false,
      data: payload.profile
    };
  default: 
    return state;
  }
}

function settings (state = initialState, {type, payload}) {
  switch (type) {
  case SHYNEE_SETTINGS_REQUEST:
    return {
      ...state,
      fetching: true
    }; 
  case SHYNEE_SETTINGS_SUCCESS:
    return {
      ...state,
      fetching: false,
      data: payload
    };
  case SHYNEE_SETTINGS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: true,
    };
  case SHYNEE_IS_READY:
    return {
      ...state,
      data: {
        ...state.data,
        isReady: payload
      }
    };
  default: 
    return state;
  }
}

export default combineReducers({
  info,
  settings
});
