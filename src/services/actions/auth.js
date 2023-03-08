import {postForgotPasswordToApi, postResetPasswordToApi} from "../../utils/burger-api";

export const AUTH_FORGOT_PASSWORD_REQUEST = 'AUTH_FORGOT_PASSWORD_REQUEST';
export const AUTH_FORGOT_PASSWORD_SUCCESS = 'AUTH_FORGOT_PASSWORD_SUCCESS';
export const AUTH_FORGOT_PASSWORD_FAILED = 'AUTH_FORGOT_PASSWORD_FAILED';

export const AUTH_RESET_PASSWORD_REQUEST = 'AUTH_RESET_PASSWORD_REQUEST';
export const AUTH_RESET_PASSWORD_SUCCESS = 'AUTH_RESET_PASSWORD_SUCCESS';
export const AUTH_RESET_PASSWORD_FAILED = 'AUTH_RESET_PASSWORD_FAILED';

export function postForgotPassword(email){
  return function (dispatch){
    dispatch({type:AUTH_FORGOT_PASSWORD_REQUEST})
    postForgotPasswordToApi(email).then(
        dispatch({
          type: AUTH_FORGOT_PASSWORD_SUCCESS,
        })
    ).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_FORGOT_PASSWORD_FAILED})
    })
  }
}
export function postResetPassword(password, token){
  return function (dispatch){
    dispatch({type:AUTH_RESET_PASSWORD_REQUEST})
    postResetPasswordToApi(password, token).then(
        dispatch({
          type: AUTH_RESET_PASSWORD_SUCCESS,
        })
    ).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_RESET_PASSWORD_FAILED})
    })
  }
}
