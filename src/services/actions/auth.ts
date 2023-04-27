import {
  getProfileFromApi, patchProfileToApi,
  postForgotPasswordToApi,
  postLoginToApi, postLogoutToApi, postRefreshTokenToApi,
  postRegisterToApi,
  postResetPasswordToApi
} from "../../utils/burger-api";
import {getCookie, setCookie} from "../../utils/cookies";
import {useSelector} from "react-redux";
import {GET_INGREDIENTS_LIST_REQUEST} from "./list";
import {TResponseAuthUser, TResponseGetProfile, TResponseRefreshToken, TUser} from "../../utils/types";
import {AppDispatch, AppThunk} from "../types";

export const AUTH_FORGOT_PASSWORD_REQUEST: 'AUTH_FORGOT_PASSWORD_REQUEST' = 'AUTH_FORGOT_PASSWORD_REQUEST';
export const AUTH_FORGOT_PASSWORD_SUCCESS: 'AUTH_FORGOT_PASSWORD_SUCCESS' = 'AUTH_FORGOT_PASSWORD_SUCCESS';
export const AUTH_FORGOT_PASSWORD_FAILED: 'AUTH_FORGOT_PASSWORD_FAILED' = 'AUTH_FORGOT_PASSWORD_FAILED';

export const AUTH_RESET_PASSWORD_REQUEST: 'AUTH_RESET_PASSWORD_REQUEST' = 'AUTH_RESET_PASSWORD_REQUEST';
export const AUTH_RESET_PASSWORD_SUCCESS: 'AUTH_RESET_PASSWORD_SUCCESS' = 'AUTH_RESET_PASSWORD_SUCCESS';
export const AUTH_RESET_PASSWORD_FAILED: 'AUTH_RESET_PASSWORD_FAILED' = 'AUTH_RESET_PASSWORD_FAILED';

export const AUTH_REGISTER_REQUEST: 'AUTH_REGISTER_REQUEST' = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS' = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILED: 'AUTH_REGISTER_FAILED' = 'AUTH_REGISTER_FAILED';

export const AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST' = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS' = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED: 'AUTH_LOGIN_FAILED' = 'AUTH_LOGIN_FAILED';

export const AUTH_REFRESH_TOKEN_REQUEST: 'AUTH_REFRESH_TOKEN_REQUEST' = 'AUTH_REFRESH_TOKEN_REQUEST';
export const AUTH_REFRESH_TOKEN_SUCCESS: 'AUTH_REFRESH_TOKEN_SUCCESS' = 'AUTH_REFRESH_TOKEN_SUCCESS';
export const AUTH_REFRESH_TOKEN_FAILED: 'AUTH_REFRESH_TOKEN_FAILED' = 'AUTH_REFRESH_TOKEN_FAILED';

export const AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST' = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS' = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILED: 'AUTH_LOGOUT_FAILED' = 'AUTH_LOGOUT_FAILED';

export const AUTH_GET_PROFILE_REQUEST: 'AUTH_GET_PROFILE_REQUEST' = 'AUTH_GET_PROFILE_REQUEST';
export const AUTH_GET_PROFILE_SUCCESS: 'AUTH_GET_PROFILE_SUCCESS' = 'AUTH_GET_PROFILE_SUCCESS';
export const AUTH_GET_PROFILE_FAILED: 'AUTH_GET_PROFILE_FAILED' = 'AUTH_GET_PROFILE_FAILED';

export const AUTH_PATCH_PROFILE_REQUEST: 'AUTH_PATCH_PROFILE_REQUEST' = 'AUTH_PATCH_PROFILE_REQUEST';
export const AUTH_PATCH_PROFILE_SUCCESS: 'AUTH_PATCH_PROFILE_SUCCESS' = 'AUTH_PATCH_PROFILE_SUCCESS';
export const AUTH_PATCH_PROFILE_FAILED: 'AUTH_PATCH_PROFILE_FAILED' = 'AUTH_PATCH_PROFILE_FAILED';

interface IAuthForgotPasswordRequestAction {
  readonly type: typeof AUTH_FORGOT_PASSWORD_REQUEST;
}

export const authForgotPasswordRequestAction = (): IAuthForgotPasswordRequestAction => ({
  type: AUTH_FORGOT_PASSWORD_REQUEST
});

interface IAuthForgotPasswordSuccessAction {
  readonly type: typeof AUTH_FORGOT_PASSWORD_SUCCESS;
}

export const authForgotPasswordSuccessAction = (): IAuthForgotPasswordSuccessAction => ({
  type: AUTH_FORGOT_PASSWORD_SUCCESS
});

interface IAuthForgotPasswordFailedAction {
  readonly type: typeof AUTH_FORGOT_PASSWORD_FAILED;
}

export const authForgotPasswordFailedAction = (): IAuthForgotPasswordFailedAction => ({
  type: AUTH_FORGOT_PASSWORD_FAILED
});


interface IAuthResetPasswordRequestAction {
  readonly type: typeof AUTH_RESET_PASSWORD_REQUEST;
}

export const authResetPasswordRequestAction = (): IAuthResetPasswordRequestAction => ({
  type: AUTH_RESET_PASSWORD_REQUEST
});

interface IAuthResetPasswordSuccessAction {
  readonly type: typeof AUTH_RESET_PASSWORD_SUCCESS;
}

export const authResetPasswordSuccessAction = (): IAuthResetPasswordSuccessAction => ({
  type: AUTH_RESET_PASSWORD_SUCCESS
});

interface IAuthResetPasswordFailedAction {
  readonly type: typeof AUTH_RESET_PASSWORD_FAILED;
}

export const authResetPasswordFailedAction = (): IAuthResetPasswordFailedAction => ({
  type: AUTH_RESET_PASSWORD_FAILED
});


interface IAuthRegisterRequestAction {
  readonly type: typeof AUTH_REGISTER_REQUEST;
}

export const authRegisterRequestAction = (): IAuthRegisterRequestAction => ({
  type: AUTH_REGISTER_REQUEST
});

interface IAuthRegisterSuccessAction {
  readonly type: typeof AUTH_REGISTER_SUCCESS;
  readonly data: TResponseAuthUser;
}

export const authRegisterSuccessAction = (data: TResponseAuthUser): IAuthRegisterSuccessAction => ({
  type: AUTH_REGISTER_SUCCESS,
  data
});

interface IAuthRegisterFailedAction {
  readonly type: typeof AUTH_REGISTER_FAILED;
}

export const authRegisterFailedAction = (): IAuthRegisterFailedAction => ({
  type: AUTH_REGISTER_FAILED
});


interface IAuthLoginRequestAction {
  readonly type: typeof AUTH_LOGIN_REQUEST;
}

export const authLoginRequestAction = (): IAuthLoginRequestAction => ({
  type: AUTH_LOGIN_REQUEST
});

interface IAuthLoginSuccessAction {
  readonly type: typeof AUTH_LOGIN_SUCCESS;
  readonly data: TResponseAuthUser;
}

export const authLoginSuccessAction = (data: TResponseAuthUser): IAuthLoginSuccessAction => ({
  type: AUTH_LOGIN_SUCCESS,
  data
});

interface IAuthLoginFailedAction {
  readonly type: typeof AUTH_LOGIN_FAILED;
}

export const authLoginFailedAction = (): IAuthLoginFailedAction => ({
  type: AUTH_LOGIN_FAILED
});


interface IAuthRefreshTokenRequestAction {
  readonly type: typeof AUTH_REFRESH_TOKEN_REQUEST;
}

export const authRefreshTokenRequestAction = (): IAuthRefreshTokenRequestAction => ({
  type: AUTH_REFRESH_TOKEN_REQUEST
});

interface IAuthRefreshTokenSuccessAction {
  readonly type: typeof AUTH_REFRESH_TOKEN_SUCCESS;
  readonly data: TResponseRefreshToken;
}

export const authRefreshTokenSuccessAction = (data: TResponseRefreshToken): IAuthRefreshTokenSuccessAction => ({
  type: AUTH_REFRESH_TOKEN_SUCCESS,
  data
});

interface IAuthRefreshTokenFailedAction {
  readonly type: typeof AUTH_REFRESH_TOKEN_FAILED;
}

export const authRefreshTokenFailedAction = (): IAuthRefreshTokenFailedAction => ({
  type: AUTH_REFRESH_TOKEN_FAILED
});


interface IAuthLogoutRequestAction {
  readonly type: typeof AUTH_LOGOUT_REQUEST;
}

export const authLogoutRequestAction = (): IAuthLogoutRequestAction => ({
  type: AUTH_LOGOUT_REQUEST
});

interface IAuthLogoutSuccessAction {
  readonly type: typeof AUTH_LOGOUT_SUCCESS;

}

export const authLogoutSuccessAction = (): IAuthLogoutSuccessAction => ({
  type: AUTH_LOGOUT_SUCCESS
});

interface IAuthLogoutFailedAction {
  readonly type: typeof AUTH_LOGOUT_FAILED;
}

export const authLogoutFailedAction = (): IAuthLogoutFailedAction => ({
  type: AUTH_LOGOUT_FAILED
});


interface IAuthGetProfileRequestAction {
  readonly type: typeof AUTH_GET_PROFILE_REQUEST;
}

export const authGetProfileRequestAction = (): IAuthGetProfileRequestAction => ({
  type: AUTH_GET_PROFILE_REQUEST
});

interface IAuthGetProfileSuccessAction {
  readonly type: typeof AUTH_GET_PROFILE_SUCCESS;
  readonly data: TResponseGetProfile;
}

export const authGetProfileSuccessAction = (data: TResponseGetProfile): IAuthGetProfileSuccessAction => ({
  type: AUTH_GET_PROFILE_SUCCESS,
  data
});

interface IAuthGetProfileFailedAction {
  readonly type: typeof AUTH_GET_PROFILE_FAILED;
}

export const authGetProfileFailedAction = (): IAuthGetProfileFailedAction => ({
  type: AUTH_GET_PROFILE_FAILED
});


interface IAuthPatchProfileRequestAction {
  readonly type: typeof AUTH_PATCH_PROFILE_REQUEST;
}

export const authPatchProfileRequestAction = (): IAuthPatchProfileRequestAction => ({
  type: AUTH_PATCH_PROFILE_REQUEST
});

interface IAuthPatchProfileSuccessAction {
  readonly type: typeof AUTH_PATCH_PROFILE_SUCCESS;
  readonly data: TResponseGetProfile;
}

export const authPatchProfileSuccessAction = (data: TResponseGetProfile): IAuthPatchProfileSuccessAction => ({
  type: AUTH_PATCH_PROFILE_SUCCESS,
  data
});

interface IAuthPatchProfileFailedAction {
  readonly type: typeof AUTH_PATCH_PROFILE_FAILED;
}

export const authPatchProfileFailedAction = (): IAuthPatchProfileFailedAction => ({
  type: AUTH_PATCH_PROFILE_FAILED
});


export type TAuthActions = IAuthForgotPasswordRequestAction |
  IAuthForgotPasswordSuccessAction |
  IAuthForgotPasswordFailedAction |
  IAuthResetPasswordRequestAction |
  IAuthResetPasswordSuccessAction |
  IAuthResetPasswordFailedAction |
  IAuthRegisterRequestAction |
  IAuthRegisterSuccessAction |
  IAuthRegisterFailedAction |
  IAuthLoginRequestAction |
  IAuthLoginSuccessAction |
  IAuthLoginFailedAction |
  IAuthRefreshTokenRequestAction |
  IAuthRefreshTokenSuccessAction |
  IAuthRefreshTokenFailedAction |
  IAuthLogoutRequestAction |
  IAuthLogoutSuccessAction |
  IAuthLogoutFailedAction |
  IAuthGetProfileRequestAction |
  IAuthGetProfileSuccessAction |
  IAuthGetProfileFailedAction |
  IAuthPatchProfileRequestAction |
  IAuthPatchProfileSuccessAction |
  IAuthPatchProfileFailedAction;


export const postForgotPassword: AppThunk = (email: string) =>
  (dispatch: AppDispatch) => {
    dispatch(authForgotPasswordRequestAction());
    postForgotPasswordToApi(email).then(() => {
      dispatch(authForgotPasswordSuccessAction());
    }).catch(e => {
      console.log(e.message);
      dispatch(authForgotPasswordFailedAction());
    })
  }

export const postResetPassword: AppThunk = (password: string, token: string) =>
  (dispatch: AppDispatch) => {
    dispatch(authResetPasswordRequestAction())
    postResetPasswordToApi(password, token).then(() => {
      dispatch(authResetPasswordSuccessAction())
    }).catch(e => {
      console.log(e.message);
      dispatch(authResetPasswordFailedAction())
    })
  }

export const postRegister: AppThunk = (email: string, password: string, name: string) =>
  (dispatch: AppDispatch) => {
    dispatch(authRegisterRequestAction())
    postRegisterToApi(email, password, name).then(data => {
      dispatch(authRegisterSuccessAction(data))
    }).catch(e => {
      console.log(e.message);
      dispatch(authRegisterFailedAction())
    })
  }

export const postLogin: AppThunk = (email, password) =>
  (dispatch: AppDispatch) => {
    dispatch(authLoginRequestAction())
    postLoginToApi(email, password).then(data => {
      dispatch(authLoginSuccessAction(data))
    }).catch(e => {
      console.log(e.message);
      dispatch(authLoginFailedAction())
    })
  }

export const refreshToken: AppThunk = (token) =>
  (dispatch: AppDispatch) => {
    dispatch(authRefreshTokenRequestAction())
    postRefreshTokenToApi(token).then(data => {
      dispatch(authRefreshTokenSuccessAction(data))
    }).catch(e => {
      console.log(e.message);
      dispatch(authRefreshTokenFailedAction())
    })
  }


export const postLogout: AppThunk = () =>
  (dispatch: AppDispatch) => {
    const token = getCookie('burgerRefreshToken');
    dispatch(authLogoutRequestAction())
    postLogoutToApi(token).then(() => {
      setCookie('burgerRefreshToken', '', -1)
      dispatch(authLogoutSuccessAction())
    }).catch(e => {
      console.log(e.message);
      dispatch(authLogoutFailedAction())
    })
  }


export const getProfile: AppThunk = (accessToken) =>
  (dispatch: AppDispatch) => {
    const refToken = getCookie('burgerRefreshToken');
    dispatch(authGetProfileRequestAction())
    getProfileFromApi(accessToken).then(data => {
      dispatch(authGetProfileSuccessAction(data))
    }).catch(e => {
      if (e === 'Код ошибки: 401') {
        if (refToken) {


          refreshToken(refToken)
        }
      } else {
        console.log(e.message);
        dispatch(authGetProfileFailedAction())
      }
    })
  }


export const patchProfile: AppThunk = (accessToken: string, name: string, email: string, password: string) =>
  (dispatch: AppDispatch) => {
    const refToken = getCookie('burgerRefreshToken');
    dispatch(authPatchProfileRequestAction())
    patchProfileToApi(accessToken, name, email, password).then(data => {
      dispatch(authPatchProfileSuccessAction(data))
    }).catch(e => {
      if (e === 'Код ошибки: 401') {
        if (refToken) {
          // @ts-ignore
          dispatch(refreshToken(refToken))
        }
      } else {
        console.log(e.message);
        dispatch(authPatchProfileFailedAction())
      }
    })
  }




