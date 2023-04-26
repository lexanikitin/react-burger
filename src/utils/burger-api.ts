import {API_URL} from "./constants";
import {TBurgerIngredientInfo, TOrder} from "./types";

const checkResponse2 = (res: Response): {} | Promise<string> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}
const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}
type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
  [key in TDataKey]: TDataType
} & {
  success?: boolean;
  message?: string;
  headers?: Headers;
};

export const getIngredientsFromApi = async (): Promise<TResponseBody<'data', Array<TBurgerIngredientInfo>>> => {
  return await fetch(`${API_URL}ingredients`)
    .then(checkResponse<Promise<TResponseBody<'data', Array<TBurgerIngredientInfo>>>>)
}
export const postOrderToApi = async (token: string, orderContent: string[]): Promise<TResponseBody<'order', TOrder>> => {
  return await fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
      "ingredients": orderContent
    })
  })
    .then(checkResponse<Promise<TResponseBody<'order', TOrder>>>)
}

export function postForgotPasswordToApi(email: string): Promise<{}> {
  return fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email
    })
  })
    .then(checkResponse2)
}

export function postResetPasswordToApi(password: string, token: string): Promise<{}> {
  return fetch(`${API_URL}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "token": token
    })
  })
    .then(checkResponse2)
}

export function postRegisterToApi(email: string, password: string, name: string): Promise<{}> {
  return fetch(`${API_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name
    })
  })
    .then(checkResponse2)
}

export function postLoginToApi(email: string, password: string): Promise<{}> {
  return fetch(`${API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
    .then(checkResponse2)
}

type TResponseRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}
export const postRefreshTokenToApi= async (token: string): Promise<TResponseBody<'data', Array<TResponseRefreshToken>>> => {
  return await fetch(`${API_URL}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
    .then(checkResponse<Promise<TResponseBody<'data', Array<TResponseRefreshToken>>>>)
}

export function postLogoutToApi(token: string): Promise<{}> {
  return fetch(`${API_URL}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
    .then(checkResponse2)
}

export function getProfileFromApi(token: string): Promise<{}> {
  return fetch(`${API_URL}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  })
    .then(checkResponse2)
}

export function patchProfileToApi(token: string, name: string, email: string, password: string): Promise<{}> {
  if (password === '') {
    return fetch(`${API_URL}auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        "name": name,
        "email": email
      })

    })
      .then(checkResponse2)
  } else {
    return fetch(`${API_URL}auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
      })

    })
      .then(checkResponse2)
  }
}

