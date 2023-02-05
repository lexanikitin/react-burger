import {API_URL} from "./constants";
export function getIngredientsFromApi(apiState, setApiState){
  setApiState({...apiState, isLoading: true});
  return fetch(`${API_URL}ingredients`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Код ошибки: ${res.status}`);
    })
    .then(data => setApiState({...apiState, ingredients: data.data, isLoading: false}))
    .catch(e => {
      setApiState({...apiState, error: e.message, isLoading: false});
    });
}

export function postOrderToApi(orderContent, apiState, setApiState){
  setApiState({...apiState,orderNum: undefined, isLoading: true});
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": orderContent
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Код ошибки: ${res.status}`);
    })
    .then(data => setApiState({...apiState, data: data.order.number, isLoading: false}))
    .catch(e => {
      setApiState({...apiState, error: e.message, isLoading: false});
    });
}

