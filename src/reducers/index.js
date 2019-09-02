/**
 * 
 * 
 */


import { combineReducers} from 'redux';

/**
 *captures the logged in user and returns the userDetails object
 *
 */
const activeUserReducer = (user = null, action) =>{
     if (action.type == 'ACTIVE_USER'){
         return action.payload;
     }
     return  null;
 };


 export default combineReducers({
     user: activeUserReducer
 });