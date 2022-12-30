import React, {useState} from 'react';
import clsx from "clsx";
import ingrStyle from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import PropTypes from "prop-types";
import {burgerProps} from "../../utils/types";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
import IngredientDetails from "../ingredient-details/IngredientDetails";

const BurgerIngredients = ({list}) => {
  const [isModalActive, setModalActive] = useState(false);
  const [ingredient, setIngredient] = useState([]);

  const typeList = [
    {id: 1, name: 'Булки', type: 'bun'},
    {id: 2, name: 'Соусы', type: 'sauce'},
    {id: 3, name: 'Начинки', type: 'main'}
  ];

  const [currentTab, setCurrentTab] = React.useState('Булки')

  return (
    <section className={clsx(ingrStyle.section, 'ml-5', 'mr-5', 'pt-10')}>
      <h1 className={clsx('text', 'text_type_main-large', 'pb-5')}>Соберите бургер</h1>
      <div className={'pb-10'} style={{display: 'flex'}}>
        {typeList.map(type => {
          return (
            <Tab key={type.id} value={type.name} active={currentTab === type.name} onClick={setCurrentTab}>
              {type.name}
            </Tab>
          )
        })}
      </div>
      <ul className={ingrStyle.ingredientsTypeList}>
        {typeList.map(type => {
          return (
            <>
              <li>
                <p className={clsx('text text_type_main-medium', ingrStyle.ingredientsTypeTitle)}>{type.name}</p>
              </li>
              <ul className={clsx(ingrStyle.ingredientsList, 'pt-6', 'pl-4', 'pr-4', 'pb-10')}>
                {list.map((item) => {
                  if (item.type === type.type) {
                    return (
                      <BurgerIngredient key={item._id} info={item} setModalActive={setModalActive}
                                        setIngredient={setIngredient}/>
                    )
                  }
                })}
              </ul>
            </>
          );
        })}
      </ul>

      <Modal isActive={isModalActive} setter={setModalActive}>
        <IngredientDetails info={ingredient}/>
      </Modal>

    </section>
  );
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  list: PropTypes.arrayOf(burgerProps).isRequired
};
