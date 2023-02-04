import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import order from "../../utils/order";
import {getIngredientsFromApi} from "../../utils/burger-api";
import {BurgerContext} from "../../services/BurgerContext";

const orderNum = 123456;

function App() {

  const [apiState, setApiState] = useState({
    ingredients: [],
    isLoading: true,
    error: ''
  });

  useEffect(() => {
    getIngredientsFromApi(apiState, setApiState);
  }, []);


  return (
    <div className="App">
      <AppHeader/>
      <main className={app_style.main_content}>
        {
          apiState.isLoading ? <p className="text text_type_main-medium">Идет загрузка...</p>
            :
            <>
              <BurgerIngredients list={apiState.ingredients}/>
              <BurgerContext.Provider value={order}>
                <BurgerConstructor orderNum={orderNum}/>
              </BurgerContext.Provider>
            </>
        }
      </main>
    </div>
  );
}

export default App;
