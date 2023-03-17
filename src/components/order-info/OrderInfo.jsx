import React from 'react';
import styles from './order-info.module.css'
import clsx from "clsx";
import doneImg from '../../images/done.svg'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const OrderInfo = () => {
  const {orderNumber} = useSelector(store => store.order);

  return (
    <div className={styles.order}>
      <p className={clsx('mt-30', 'text', 'text_type_digits-large')}>{orderNumber}</p>
      <p className={clsx('mt-8', 'text', 'text_type_main-medium')}>идентификатор заказа</p>
      <img className={'mt-15'} src={doneImg} alt="Заказ принят"/>
      <p className={clsx('mt-15', 'text', 'text_type_main-default')}>Ваш заказ начали готовить</p>
      <p className={clsx('mt-2', 'mb-30', 'text', 'text_type_main-default', 'text_color_inactive')}>Дождитесь готовности
        на орбитальной станции</p>
    </div>
  );
};

export default OrderInfo;
