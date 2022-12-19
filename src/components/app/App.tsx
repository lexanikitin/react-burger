import React from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import app_style from './App.module.css'
import clsx from "clsx";
import data from '../../utils/data.js'
import order from "../../utils/order";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main className={app_style.main_content}>
                <BurgerIngredients list={data} className={clsx('ml-5', 'mr-5')}/>
                <BurgerConstructor order={order} className={clsx('ml-5', 'mr-5')}/>
            </main>
        </div>
    );
}

export default App;
