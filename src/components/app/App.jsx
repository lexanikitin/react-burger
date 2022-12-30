import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import order from "../../utils/order";

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients ';

function App() {

  const [apiState, setApiState] = useState({
    ingredients: [],
    isLoading: true,
    error: ''
  });

  useEffect(() => {
    getIngredientsFromApi();
  }, []);

  const getIngredientsFromApi = async () => {
    setApiState({...apiState, isLoading: true});
    fetch(apiUrl)
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
  };

  return (
    <div className="App">
      <AppHeader/>
      <main className={app_style.main_content}>
        {
          apiState.isLoading ? <p className="text text_type_main-medium">Идет загрузка...</p>
            :
            <>
              <BurgerIngredients list={apiState.ingredients}/>
              <BurgerConstructor order={order}/>
            </>
        }
      </main>
    </div>
  );
}

export default App;
