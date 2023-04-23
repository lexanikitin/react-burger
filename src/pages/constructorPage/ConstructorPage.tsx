import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsList} from "../../services/actions/list";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import app_style from "./constructor-page.module.css";
import BurgerIngredients from "../../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../../components/burger-constructor/BurgerConstructor";

const ConstructorPage:FC = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const {isRequested, isFailed} = useSelector(store => store.list);
  useEffect(() => {
    // @ts-ignore
    dispatch(getIngredientsList());
  }, []);

  return (
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
    </DndProvider>
  );
};

export default ConstructorPage;
