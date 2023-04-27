import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import ingrStyle from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import {
  clearCurrentIngredientAction,
  setCurrentIngredientAction
} from "../../services/actions/modal";
import {setActiveTabAction} from "../../services/actions/tabs";
import {useLocation} from "react-router-dom";
import {TBurgerIngredientInfo, TTab} from "../../utils/types";
import {useDispatch, useSelector} from "../../services/hooks";

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {ingredientsList} = useSelector(store => store.list);
  const {defaultTabsList, activeTabId} = useSelector(store => store.tabs);
  const [isModalActive, setModalActive] = useState<boolean>(false);
  useEffect(() => {
    if (isModalActive === false) {
      dispatch(clearCurrentIngredientAction)
    }
  }, [isModalActive]);

  useEffect(() => {
    if (location.state) {
      dispatch(setCurrentIngredientAction(JSON.parse(location.state)))
      setModalActive(true);
    }
  }, [])
  const scrollHandler = (e: any) => {
    dispatch(setActiveTabAction(
      defaultTabsList.map(
        (item: TTab, index: number) => {
          return e.target.childNodes[index].getBoundingClientRect().top - e.target.getBoundingClientRect().top
        }
      ).findIndex((element: number) => {
        return element >= 0
      })
    ))
  }

  return (
    <section className={clsx(ingrStyle.section, 'ml-5', 'mr-5', 'pt-10')}>
      <h1 className={clsx('text', 'text_type_main-large', 'pb-5')}>Соберите бургер</h1>
      <div className={'pb-10'} style={{display: 'flex'}}>
        {defaultTabsList.map((tab: TTab, index: number) => {
          return (
            <Tab key={`tab-${index}`} value={tab.type} active={activeTabId === tab.id} onClick={() => {
            }}>
              {tab.name}
            </Tab>
          )
        })}
      </div>
      <ul className={ingrStyle.ingredientsTypeList} onScroll={scrollHandler}>
        {defaultTabsList.map((type: TTab, index: number) => {
          return (
            <div key={index}>
              <li>
                <p className={clsx('text text_type_main-medium', ingrStyle.ingredientsTypeTitle)}>{type.name}</p>
              </li>
              <ul className={clsx(ingrStyle.ingredientsList, 'pt-6', 'pl-4', 'pr-4', 'pb-10')}>
                {ingredientsList.map((item: TBurgerIngredientInfo, index: number) => {
                  if (item.type === type.type) {
                    return (
                      <BurgerIngredient key={index} info={item} setModalActive={setModalActive}/>
                    )
                  }
                })}
              </ul>
            </div>
          );
        })}
      </ul>

      <Modal isActive={isModalActive} setter={setModalActive}>
        <IngredientDetails/>
      </Modal>

    </section>
  );
};

export default BurgerIngredients;
