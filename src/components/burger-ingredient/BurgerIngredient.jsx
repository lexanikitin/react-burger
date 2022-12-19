import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './burger-ingredient.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";

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

BurgerIngredient.propTypes = {
    info:PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            proteins: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired,
            image_large: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired
        }).isRequired
};