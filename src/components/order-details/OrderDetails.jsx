import React from 'react';
import orderDetailsStyles from './order-details.module.css'
import clsx from "clsx";
import doneImg from '../../images/done.svg'
import PropTypes from "prop-types";

const OrderDetails = ({orderNum}) => {
  return (
    <div className={orderDetailsStyles.order}>
      <p className={clsx('mt-30', 'text', 'text_type_digits-large')}>{orderNum}</p>
      <p className={clsx('mt-8', 'text', 'text_type_main-medium')}>идентификатор заказа</p>
      <img className={'mt-15'} src={doneImg} alt="Заказ принят"/>
      <p className={clsx('mt-15', 'text', 'text_type_main-default')}>Ваш заказ начали готовить</p>
      <p className={clsx('mt-2', 'mb-30', 'text', 'text_type_main-default', 'text_color_inactive')}>Дождитесь готовности
        на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  orderNum: PropTypes.number.isRequired
}