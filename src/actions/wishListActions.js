/**
 * Created by ravitej on 5/14/18.
 */
import * as TYPES from './actionTypes';
import data from './WishListData.json';

export const fetchWishList = () =>{
  return{
    type: TYPES.FETCH_WISHLIST,
    payload: data
  }
};

export const selectWishList = () =>{
  return{
    type: TYPES.SELECT_WISHLIST_ITEM,
    payload: data
  }
};