import {
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAILED
} from "../actions/auth";

const initialState = {
  forgotPasswordIsRequested: false,
  forgotPasswordIsFailed: false,
  forgotPasswordIsSuccess: false,
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
        forgotPasswordIsSuccess: true
      }
    }
    case AUTH_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordIsRequested: false,
        forgotPasswordIsFailed: true
      }
    }
    default: {
      return state;
    }
  }
}
