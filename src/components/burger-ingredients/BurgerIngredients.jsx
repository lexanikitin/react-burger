import React, {useState} from 'react';
import clsx from "clsx";
import ingrStyle from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import PropTypes from "prop-types";
import {burgerProps} from "../../utils/types";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import {useDispatch, useSelector} from "react-redux";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {ingredientsList} = useSelector(store => store.list);
  const {defaultTabsList, activeTabId} = useSelector(store => store.tabs);

  const [ingredient, setIngredient] = useState(ingredientsList[0]);
  const [isModalActive, setModalActive] = useState(false);

  return (
    <section className={clsx(ingrStyle.section, 'ml-5', 'mr-5', 'pt-10')}>
      <h1 className={clsx('text', 'text_type_main-large', 'pb-5')}>Соберите бургер</h1>
      <div className={'pb-10'} style={{display: 'flex'}}>
        {defaultTabsList.map((tab, index) => {
          return (
            <Tab key={`tab-${index}`} value={tab.type} active={activeTabId === tab.id}>
              {tab.name}
            </Tab>
          )
        })}
      </div>
      <ul className={ingrStyle.ingredientsTypeList}>
        {defaultTabsList.map((type, index) => {
          return (
            <div key={index}>
              <li>
                <p className={clsx('text text_type_main-medium', ingrStyle.ingredientsTypeTitle)}>{type.name}</p>
              </li>
              <ul className={clsx(ingrStyle.ingredientsList, 'pt-6', 'pl-4', 'pr-4', 'pb-10')}>
                {ingredientsList.map((item, index) => {
                  if (item.type === type.type) {
                    return (
                      <BurgerIngredient key={index} info={item} setModalActive={setModalActive}
                                        setIngredient={setIngredient}/>
                    )
                  }
                })}
              </ul>
            </div>
          );
        })}
      </ul>

      {/*<Modal isActive={isModalActive} setter={setModalActive}>*/}
      {/*  <IngredientDetails info={ingredient}/>*/}
      {/*</Modal>*/}

    </section>
  );
};

export default BurgerIngredients;

/*
BurgerIngredients.propTypes = {
  list: PropTypes.arrayOf(burgerProps.isRequired).isRequired
};
*/
