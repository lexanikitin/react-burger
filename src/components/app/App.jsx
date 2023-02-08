import React, {useEffect} from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import {getIngredientsList} from "../../services/actions/actions";
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {isRequested, isFailed} = useSelector(store => store.list);
  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  return (
    <div className="App">
      <AppHeader/>
      <main className={app_style.main_content}>
        {
          isRequested && !isFailed ? <p className="text text_type_main-medium">Идет загрузка...</p>
            :
            <>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </>
        }
      </main>
    </div>
  );
}

export default App;
