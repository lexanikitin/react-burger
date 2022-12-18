import React from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </div>
    );
}

export default App;
