import React, {useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import BrgCnstrStyle from './burger-constructor.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";
import {burgerProps} from "../../utils/types";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";

const BurgerConstructor = ({order, orderNum}) => {

  const [isModalOrderActive, setModalOrderActive] = useState(false)


  const bun = order.find((item) => {
    if (item.type === 'bun') {
      return item
    }
  })

  return (
    <section className={clsx('ml-5', 'mr-5', BrgCnstrStyle.section, 'pt-25', 'pl-4')}>
      <ConstructorElement {...bun} text={bun.name + '(верх)'} thumbnail={bun.image} type={'top'}
                          isLocked={true} extraClass={clsx('mb-4', 'ml-8')}/>
      <ul className={clsx(BrgCnstrStyle.editedList)}>
        {order.map(item => {
          if (item.type !== 'bun') {
            return (
              <li className={clsx(BrgCnstrStyle.editedItem)} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement {...item} text={item.name} thumbnail={item.image}/>
              </li>
            )
          }
        })}
      </ul>
      <ConstructorElement {...bun} text={bun.name + '(низ)'} thumbnail={bun.image} type={'bottom'}
                          isLocked={true} extraClass={'mt-4 ml-8'}/>
      <div className={clsx('mt-10', BrgCnstrStyle.total)}>
        <div className={clsx('text text_type_main-large', BrgCnstrStyle.amount)}>
          <p className="text text_type_digits-medium">{order.reduce((prev, curr) => prev + curr.price, 0)}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-10 mr-4" onClick={() => {
          setModalOrderActive(true)
        }}>
          Оформить заказ
        </Button>
      </div>

      <Modal isActive={isModalOrderActive} setter={setModalOrderActive}>
        <OrderDetails orderNum={orderNum}/>
      </Modal>

    </section>
  );
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  order: PropTypes.arrayOf(burgerProps).isRequired,
  orderNum: PropTypes.number.isRequired
};
