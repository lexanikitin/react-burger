import {
  postForgotPasswordToApi,
  postLoginToApi, postLogoutToApi, postRefreshTokenToApi,
  postRegisterToApi,
  postResetPasswordToApi
} from "../../utils/burger-api";
import {getCookie, setCookie} from "../../utils/cookies";

export const AUTH_FORGOT_PASSWORD_REQUEST = 'AUTH_FORGOT_PASSWORD_REQUEST';
export const AUTH_FORGOT_PASSWORD_SUCCESS = 'AUTH_FORGOT_PASSWORD_SUCCESS';
export const AUTH_FORGOT_PASSWORD_FAILED = 'AUTH_FORGOT_PASSWORD_FAILED';

export const AUTH_RESET_PASSWORD_REQUEST = 'AUTH_RESET_PASSWORD_REQUEST';
export const AUTH_RESET_PASSWORD_SUCCESS = 'AUTH_RESET_PASSWORD_SUCCESS';
export const AUTH_RESET_PASSWORD_FAILED = 'AUTH_RESET_PASSWORD_FAILED';

export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILED = 'AUTH_REGISTER_FAILED';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';

export const AUTH_REFRESH_TOKEN_REQUEST = 'AUTH_REFRESH_TOKEN_REQUEST';
export const AUTH_REFRESH_TOKEN_SUCCESS = 'AUTH_REFRESH_TOKEN_SUCCESS';
export const AUTH_REFRESH_TOKEN_FAILED = 'AUTH_REFRESH_TOKEN_FAILED';

export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILED = 'AUTH_LOGOUT_FAILED';

export function postForgotPassword(email) {
  return function (dispatch) {
    dispatch({type: AUTH_FORGOT_PASSWORD_REQUEST})
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

export function postResetPassword(password, token) {
  return function (dispatch) {
    dispatch({type: AUTH_RESET_PASSWORD_REQUEST})
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

export function postRegister(email, password, name) {
  return function (dispatch) {
    dispatch({type: AUTH_REGISTER_REQUEST})
    postRegisterToApi(email, password, name).then(data => {
      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        data:data
      })
    }).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_REGISTER_FAILED})
    })
  }
}
export function postLogin(email, password) {
  return function (dispatch) {
    dispatch({type: AUTH_LOGIN_REQUEST})
    postLoginToApi(email, password).then(data => {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        data:data
      })
    }).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_LOGIN_FAILED})
    })
  }
}
function refreshtoken() {
  const token = getCookie('burgerRefreshToken');
  return function (dispatch) {
    dispatch({type: AUTH_REFRESH_TOKEN_REQUEST})
    postRefreshTokenToApi(token).then(data => {
      dispatch({
        type: AUTH_REFRESH_TOKEN_SUCCESS,
        data:data
      })
    }).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_REFRESH_TOKEN_FAILED})
    })
  }
}

function postLogout() {
  const token = getCookie('burgerRefreshToken');
  return function (dispatch) {
    dispatch({type: AUTH_LOGOUT_REQUEST})
    postLogoutToApi(token).then(data => {
      dispatch({
        type: AUTH_LOGOUT_SUCCESS
      })
    }).catch(e => {
      console.log(e.message);
      dispatch({type: AUTH_LOGOUT_FAILED})
    })
  }
}



