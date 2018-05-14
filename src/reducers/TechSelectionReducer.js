/**
 * Created by ravitej on 5/7/18.
 */
export default (state = null, action) => {
  switch (action.type){
    case 'select_library':
      return  action.payload;
    default:
      return state;
  }
}