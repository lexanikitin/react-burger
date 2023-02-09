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

export function postOrderToApi(orderContent) {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": orderContent
    })
  })
    .then(checkResponse)
}

