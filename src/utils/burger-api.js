import {API_URL} from "./constants";
export function getIngredientsFromApi(apiState, setApiState){
  setApiState({...apiState, isLoading: true});
  return fetch(API_URL)
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
