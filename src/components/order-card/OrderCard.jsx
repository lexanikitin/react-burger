import React, {useEffect, useMemo, useState} from 'react';
import styles from './order-card.module.css'
import clsx from "clsx";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {orderReducer} from "../../services/reducers/order";
import {useDispatch, useSelector} from "react-redux";
import BrgCnstrStyle from "../burger-constructor/burger-constructor.module.css";
import OrderPics from "../order-pics/OrderPics";
import {MODAL_SET_CURRENT_INGREDIENT} from "../../services/actions/modal";
import {FEED_SET_CURRENT_ORDER} from "../../services/actions/feed";
import {useLocation} from "react-router-dom";
import {PRIVATE_FEED_SET_CURRENT_ORDER} from "../../services/actions";

const OrderCard = ({order, setModalActive}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {ingredientsList} = useSelector(store => store.list);
  const ingList = useMemo(()=>{
    return order.ingredients.map((item, index)=>{
        return ingredientsList.find((el)=>{return el._id===item});
    })
  },[order, ingredientsList])

  const orderSum = useMemo(()=>{
    return ingList.reduce((prev, curr) => curr.type==='bun'? prev + curr.price*2: prev + curr.price,0)

  },[ingList])

  return (
    <li className={clsx(styles.card, 'pt-6', 'pr-6', 'pb-6', 'pl-6', 'mr-2')} onClick={()=>{
      if(location.pathname==='/feed') {
        dispatch({
          type: FEED_SET_CURRENT_ORDER,
          selectedOrder: order,
          selectedList: ingList,
          selectedTotal: orderSum,
        })
        setModalActive(true);
      }
      if(location.pathname==='/profile/orders') {
        dispatch({
          type: PRIVATE_FEED_SET_CURRENT_ORDER,
          selectedOrder: order,
          selectedList: ingList,
          selectedTotal: orderSum,
        })
        setModalActive(true);
      }
      }}>
      <div className={clsx(styles.infoRow)}>
        <p className={clsx(styles.number, 'text', 'text_type_digits-default')}>#{order.number}</p>
        <FormattedDate className={clsx(styles.date, 'text text_type_main-default text_color_inactive')} date={new Date(order.createdAt)}/>
      </div>
      <p className={clsx( 'text text_type_main-medium')}>{order.name}</p>
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
