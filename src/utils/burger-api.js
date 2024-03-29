import {API_URL} from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}

export function getIngredientsFromApi() {
  return fetch(`${API_URL}ingredients`)
    .then(checkResponse)
}

export function postOrderToApi(token, orderContent) {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
      "ingredients": orderContent
    })
  })
    .then(checkResponse)
}

export function postForgotPasswordToApi(email) {
  return fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email
    })
  })
    .then(checkResponse)
}

export function postResetPasswordToApi(password, token) {
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
    .then(checkResponse)
}

export function postRegisterToApi(email, password, name) {
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
    .then(checkResponse)
}

export function postLoginToApi(email, password) {
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
    .then(checkResponse)
}

export function postRefreshTokenToApi(token) {
  return fetch(`${API_URL}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
    .then(checkResponse)
}

export function postLogoutToApi(token) {
  return fetch(`${API_URL}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
    .then(checkResponse)
}

export function getProfileFromApi(token) {
  return fetch(`${API_URL}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  })
    .then(checkResponse)
}

export function patchProfileToApi(token, name, email, password) {
  if (password==='') {
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
      .then(checkResponse)
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
      .then(checkResponse)
  }
}

