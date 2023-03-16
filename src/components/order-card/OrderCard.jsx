import React, {useEffect, useMemo, useState} from 'react';
import styles from './order-card.module.css'
import clsx from "clsx";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {orderReducer} from "../../services/reducers/order";
import {useSelector} from "react-redux";
import BrgCnstrStyle from "../burger-constructor/burger-constructor.module.css";
import OrderPics from "../order-pics/OrderPics";

const OrderCard = ({order, setModalActive}) => {
  const {ingredientsList} = useSelector(store => store.list);

  const ingList = useMemo(()=>{
    return order.ingredients.map((item, index)=>{
        return ingredientsList.find((el)=>{return el._id===item});
    })
  },[order, ingredientsList])


  const orderSum = useMemo(()=>{
    return ingList.reduce((prev, curr) => curr.type==='bun'? prev + curr.price*2: prev + curr.price,0)

  },[ingList])


  console.log(ingList);
  console.log(orderSum);
  console.log(order);

  return (
    <li className={clsx(styles.card, 'pt-6', 'pr-6', 'pb-6', 'pl-6', 'mr-2')}>
      <div className={clsx(styles.infoRow)}>
        <p className={clsx(styles.number, 'text', 'text_type_digits-default')}>#{order.number}</p>
        <FormattedDate className={clsx(styles.date, 'text text_type_main-default text_color_inactive')} date={new Date(order.createdAt)}/>
      </div>
      <p className={clsx( 'text text_type_main-medium')}>Death Star Starship Main бургер</p>
      <div className={styles.lastRow}>
        <OrderPics ingredientList={ingList} />
        <div className={clsx('text text_type_main-large', styles.sum)}>
          <p className="text text_type_digits-default">{orderSum}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
