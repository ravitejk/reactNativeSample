/**
 * Created by ravitej on 5/14/18.
 */
import * as TYPES from '../actions/actionTypes';

const INITIAL_STATE = {data:[], loading: true};
export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case TYPES.FETCH_WISHLIST:
      console.log(action.payload);
      return {...state, data:action.payload, loading: false};
    default:
      return state;
  }
};