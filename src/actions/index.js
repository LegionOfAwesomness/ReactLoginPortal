/**
 * 
 * 
 */
//named export - always us to export many different  function from single file 
export const userDetails = (userInfo) => {
 //  Return an action
 //type is mandatory but payload is optional 
 return {

    type: 'ACTIVE_USER',
    payload: userInfo
    
 };

 };