import React, {useEffect} from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredientsList} from "../../services/actions/list";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";

function App() {
  const dispatch = useDispatch();
  const {isRequested, isFailed} = useSelector(store => store.list);
  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  return (
    <div className="App">
      <AppHeader/>
      <Router>
        <Routes>
          <Route path={'/'} element={
            <DndProvider backend={HTML5Backend}>
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
            </DndProvider>}
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={'/forgot-password'}/>
          <Route path='/reset-password' element={'reset-password'}/>
          <Route path='/profile' element={'/profile'}/>
          <Route path='/ingredients/:id' element={'ingredients/:id'}/>

          <Route path='*' element={'404'}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
