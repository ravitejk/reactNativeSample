import firebase from 'firebase';
import * as TYPES from './actionTypes';

export const emailChanged = text => {
  return {
    type: TYPES.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: TYPES.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}) => {
  return(dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user)=>{
        dispatch({type: TYPES.LOGIN_SUCCESSFUL, payload: user });
      })
      .catch((error)=>{
        dispatch({type: TYPES.LOGIN_FAILED, payload: error });
      });
  };

};
