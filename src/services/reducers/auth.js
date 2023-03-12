import {
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAILED,
  AUTH_RESET_PASSWORD_REQUEST,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REFRESH_TOKEN_REQUEST,
  AUTH_REFRESH_TOKEN_SUCCESS,
  AUTH_REFRESH_TOKEN_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_GET_PROFILE_REQUEST, AUTH_GET_PROFILE_SUCCESS, AUTH_GET_PROFILE_FAILED,
} from "../actions/auth";
import {setCookie} from "../../utils/cookies";

const initialState = {
  forgotPasswordIsRequested: false,
  forgotPasswordIsFailed: false,
  forgotPasswordIsSuccess: false,

  resetPasswordIsRequested: false,
  resetPasswordIsFailed: false,
  resetPasswordIsSuccess: false,

  registerIsRequested: false,
  registerIsFailed: false,
  registerIsSuccess: false,

  isAuthSuccess: false,

  user: {
    email:'',
    name:''
  },
  accessToken: '',
  accessTokenTimestamp: '',

  loginIsRequested: false,
  loginIsFailed: false,
  loginIsSuccess: false,

  refreshTokenIsRequested: false,
  refreshTokenIsFailed: false,
  refreshTokenIsSuccess: false,

  logoutIsRequested: false,
  logoutIsFailed: false,
  logoutIsSuccess: false,

  getProfileIsRequested: false,
  getProfileIsFailed: false,
  getProfileIsSuccess: false,

}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordIsRequested: true,
        forgotPasswordIsFailed: false,
        forgotPasswordIsSuccess: false
      }
    }
    case AUTH_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordIsRequested: false,
        forgotPasswordIsSuccess: true,
      }
    }
    case AUTH_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordIsRequested: false,
        forgotPasswordIsFailed: true
      }
    }


    case AUTH_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordIsRequested: true,
        resetPasswordIsFailed: false,
        resetPasswordIsSuccess: false
      }
    }
    case AUTH_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordIsRequested: false,
        resetPasswordIsSuccess: true
      }
    }
    case AUTH_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordIsRequested: false,
        resetPasswordIsFailed: true
      }
    }


    case AUTH_REGISTER_REQUEST: {
      return {
        ...state,
        registerIsRequested: true,
        registerIsFailed: false,
        registerIsSuccess: false
      }
    }
    case AUTH_REGISTER_SUCCESS: {
      setCookie('burgerRefreshToken', action.data.refreshToken)
      return {
        ...state,
        registerIsRequested: false,
        registerIsSuccess: true,
        isAuthSuccess: true,
        user : action.data.user,
        accessToken : action.data.accessToken.split(' ')[1],
      }
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        registerIsRequested: false,
        registerIsFailed: true
      }
    }


    case AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        loginIsRequested: true,
        loginIsFailed: false,
        loginIsSuccess: false
      }
    }
    case AUTH_LOGIN_SUCCESS: {
      setCookie('burgerRefreshToken', action.data.refreshToken)
      return {
        ...state,
        loginIsRequested: false,
        loginIsSuccess: true,
        isAuthSuccess: true,
        user : action.data.user,
        accessToken : action.data.accessToken.split(' ')[1],
      }
    }
    case AUTH_LOGIN_FAILED: {
      return {
        ...state,
        loginIsRequested: false,
        loginIsFailed: true
      }
    }

    case AUTH_REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenIsRequested: true,
        refreshTokenIsFailed: false,
        refreshTokenIsSuccess: false
      }
    }
    case AUTH_REFRESH_TOKEN_SUCCESS: {
      setCookie('burgerRefreshToken', action.data.refreshToken)
      return {
        ...state,
        isAuthSuccess: true,
        refreshTokenIsRequested: false,
        refreshTokenIsSuccess: true,
        accessToken : action.data.accessToken.split(' ')[1],
      }
    }
    case AUTH_REFRESH_TOKEN_FAILED: {
      setCookie('burgerRefreshToken', null, { expires: -1 })
      return {
        ...state,
        refreshTokenIsRequested: false,
        refreshTokenIsFailed: true
      }
    }

    case AUTH_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutIsRequested: true,
        logoutIsFailed: false,
        logoutIsSuccess: false
      }
    }
    case AUTH_LOGOUT_SUCCESS: {
      setCookie('burgerRefreshToken', null, { expires: -1 })
      return {
        ...state,
        logoutIsRequested: false,
        logoutIsSuccess: true,
      }
    }
    case AUTH_LOGOUT_FAILED: {
      return {
        ...state,
        logoutIsRequested: false,
        logoutIsFailed: true
      }
    }

    case AUTH_GET_PROFILE_REQUEST: {
      return {
        ...state,
        getProfileIsRequested: true,
        getProfileIsFailed: false,
        getProfileIsSuccess: false
      }
    }
    case AUTH_GET_PROFILE_SUCCESS: {
      return {
        ...state,
        getProfileIsRequested: false,
        getProfileIsSuccess: true,
        user : action.data.user,
      }
    }
    case AUTH_GET_PROFILE_FAILED: {
      return {
        ...state,
        getProfileIsRequested: false,
        getProfileIsFailed: true
      }
    }


    default: {
      return state;
    }
  }
}
