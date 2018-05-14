/**
 * Created by ravitej on 5/11/18.
 */
import * as TYPES from '../actions/actionTypes';

const INITIAL_STATE = {email: '', password: '', error: '', loading: false, 'user':{}};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case TYPES.EMAIL_CHANGED:
      return {...state, email: action.payload};
    case TYPES.PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case TYPES.LOGIN_USER:
      return {...state, loading: true};
    case TYPES.LOGIN_SUCCESSFUL:
      return {...state, user: action.payload};
    case TYPES.LOGIN_FAILED:
      return {...state, error: action.payload};
    default:
      return state;
  }
};