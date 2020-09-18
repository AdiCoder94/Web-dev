// creating authentication actions
const authActionTypes = {
  // signup actions
  SIGNUP_INITIATE: 'SIGNUP_INITIATE',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILED: 'SIGNUP_FAILED',

  // signin actions
  SIGNIN_INITIATE: 'SIGNIN_INITIATE',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_FAILED: 'SIGNIN_FAILED',

  // signout actions
  SIGNOUT_INITIATE: 'SIGNOUT_INITIATE',
  SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
  SIGNOUT_FAILED: 'SIGNOUT_FAILED'
}

export default authActionTypes;   