import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './burger-ingredient.module.css'
import clsx from "clsx";

const BurgerIngredient = (props) => {
    return (
        <li className={clsx(cardStyles.card)}>
            <Counter count={1} size={"default"} extraClass="m-1"/>
            <img src={props.info.image} alt={props.info.name}/>
            <div className={clsx('pt-1 pb-1', cardStyles.price)}>
                <p className={`text text_type_digits-default`}>{props.info.price} </p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={clsx('mt-2 mb-6 text text text_type_main-default', cardStyles.name)}>{props.info.name}</p>
        </li>
    );
};

export default BurgerIngredient;