import React from 'react';
import clsx from "clsx";
import ingrStyle from './burger-ingredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";

const BurgerIngredients = (props, list) => {

    const typeList = [
        {id: 1, name: 'Булки', type: 'bun'},
        {id: 2, name: 'Соусы', type: 'sauce'},
        {id: 3, name: 'Начинки', type: 'main'}
    ];

    const [currentTab, setCurrentTab] = React.useState('Булки')

    return (
        <section className={clsx(props.className, ingrStyle.section, 'pt-10')}>
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
                                {props.list.map((item) => {
                                    if (item.type === type.type) {
                                        return (
                                            <BurgerIngredient key={item._id} info={item}/>
                                        )
                                    }
                                })}
                            </ul>
                        </>
                    );
                })}
            </ul>
        </section>
    );
};

export default BurgerIngredients;