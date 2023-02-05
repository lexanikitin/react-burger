import React, {useContext, useMemo, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import BrgCnstrStyle from './burger-constructor.module.css'
import clsx from "clsx";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
import {BurgerContext} from "../../services/BurgerContext";
import {postOrderToApi} from "../../utils/burger-api";

const BurgerConstructor = ({}) => {

  const [isModalOrderActive, setModalOrderActive] = useState(false)

  const order = useContext(BurgerContext);

  const bun = useMemo(() => {
    return order.find((item) => {
      if (item.type === 'bun') {
        return item
      }
    })
  }, [order])

  const filling = useMemo(() => {
    return order.filter(item => item.type !== 'bun')
  }, [order]);

  const [orderState, setOrderState] = useState({
    data: 0,
    isLoading: true,
    error: ''
  });

  var total = useMemo(()=>{return filling.reduce((prev, curr) => prev + curr.price, bun.price * 2)},[order])

  return (
    <section className={clsx('ml-5', 'mr-5', BrgCnstrStyle.section, 'pt-25', 'pl-4')}>
      <ConstructorElement {...bun} text={bun.name + '(верх)'} thumbnail={bun.image} type={'top'}
                          isLocked={true} extraClass={clsx('mb-4', 'ml-8')}/>
      <ul className={clsx(BrgCnstrStyle.editedList)}>
        {filling.map(item => {
          return (
            <li className={clsx(BrgCnstrStyle.editedItem)} key={item._id}>
              <DragIcon type="primary"/>
              <ConstructorElement {...item} text={item.name} thumbnail={item.image}/>
            </li>
          )
        })}
      </ul>
      <ConstructorElement {...bun} text={bun.name + '(низ)'} thumbnail={bun.image} type={'bottom'}
                          isLocked={true} extraClass={'mt-4 ml-8'}/>
      <div className={clsx('mt-10', BrgCnstrStyle.total)}>
        <div className={clsx('text text_type_main-large', BrgCnstrStyle.amount)}>
          <p
            className="text text_type_digits-medium">{total}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-10 mr-4" onClick={() => {
          postOrderToApi(order.map(item => item._id), orderState, setOrderState);
          setModalOrderActive(true);
        }}>
          Оформить заказ
        </Button>
      </div>

      <Modal isActive={isModalOrderActive} setter={setModalOrderActive}>
        <OrderDetails orderNum={orderState.data}/>
      </Modal>

    </section>
  );
};

export default BurgerConstructor;
