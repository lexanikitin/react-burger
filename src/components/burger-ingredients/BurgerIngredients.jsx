import React, {useState} from 'react';
import clsx from "clsx";
import ingrStyle from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_CLEAR_CURRENT_INGREDIENT} from "../../services/actions/modal";
import {SET_ACTIVE_TAB} from "../../services/actions/tabs";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {ingredientsList} = useSelector(store => store.list);
  const {defaultTabsList, activeTabId} = useSelector(store => store.tabs);
  const [isModalActive, setModalActive] = useState(false);

  React.useEffect(() => {
    if (isModalActive === false) {
      dispatch({
        type: MODAL_CLEAR_CURRENT_INGREDIENT
      })
    }
  }, [isModalActive]);

  const scrollHandler = (e) => {
    dispatch({
      type: SET_ACTIVE_TAB,
      activeTabId: defaultTabsList.map(
        (item, index) => {
          return e.target.childNodes[index].getBoundingClientRect().top - e.target.getBoundingClientRect().top
        }
      ).findIndex((element) => {
        return element >= 0
      })
    })
  }

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
      <ul className={ingrStyle.ingredientsTypeList} onScroll={scrollHandler}>
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
