import React, {useEffect} from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredientsList} from "../../services/actions/list";

function App() {
  const dispatch = useDispatch();
  const {isRequested, isFailed} = useSelector(store => store.list);
  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </div>
  );
}

export default App;
