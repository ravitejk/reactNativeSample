/**
 * Created by ravitej on 5/7/18.
 */
import { combineReducers } from 'redux';
import WishListJSONReducer from './WishListJSONReducer';

export default combineReducers({
  wishListData: WishListJSONReducer
});