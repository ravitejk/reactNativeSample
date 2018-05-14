import * as TYPES from './actionTypes';
export * from './loginActions';
export * from './wishListActions'

export const selectLibrary = (libraryID) =>{
  return {
    type: TYPES.SELECT_LIBRARY,
    payload: libraryID
  }
};