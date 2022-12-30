import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './burger-ingredient.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";
import {burgerProps} from "../../utils/types";

const BurgerIngredient = ({info, setIngredient, setModalActive}) => {
  return (
    <li className={clsx(cardStyles.card)} onClick={() => {
      setIngredient(info);
      setModalActive(true);
    }}>
      <Counter count={1} size={"default"} extraClass="m-1"/>
      <img src={info.image} alt={info.name}/>
      <div className={clsx('pt-1 pb-1', cardStyles.price)}>
        <p className={`text text_type_digits-default`}>{info.price} </p>
        <CurrencyIcon type="primary"/>
      </div>
      <p className={clsx('mt-2 mb-6 text text text_type_main-default', cardStyles.name)}>{info.name}</p>
    </li>
  );
};

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  info: PropTypes.arrayOf(burgerProps).isRequired,
  setIngredient: PropTypes.func.isRequired,
  setModalActive: PropTypes.func.isRequired
};
