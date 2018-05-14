/**
 * Created by ravitej on 5/7/18.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import TechSelectionReducer from './TechSelectionReducer';
import LoginReducer from './LoginReducer';
import WishListReducer from './WishListReducer';
import WishListJSONReducer from './WishListJSONReducer';

export default combineReducers({
  techLibraries: LibraryReducer,
  selectedLibraryID: TechSelectionReducer,
  login: LoginReducer,
  wishListData: WishListJSONReducer
});