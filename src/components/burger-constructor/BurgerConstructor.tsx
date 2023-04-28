import React, {FC, useEffect, useMemo, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import BrgCnstrStyle from './burger-constructor.module.css'
import clsx from "clsx";
import Modal from "../modal/Modal";
import OrderInfo from "../order-info/OrderInfo";
import {
  addIngredientToOrderAction,
  changeBunAction,
  postOrder, restoreTngredientToOrderAction
} from "../../services/actions/order";
import {useDrop} from "react-dnd";
import BurgerConstructorIngredient from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import {useNavigate} from "react-router-dom";
import {getCookie} from "../../utils/cookies";
import {TBurgerIngredientInfo} from "../../utils/types";
import {useDispatch, useSelector} from "../../services/hooks";

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOrderActive, setModalOrderActive] = useState<boolean>(false)
  const {selectedIngredients, selectedBun} = useSelector(store => store.order);
  const accessToken = getCookie('burgerAccessToken');
  const {isAuthSuccess} = useSelector(store => store.auth);
  useEffect(() => {
    if (window.localStorage.getItem('BURGER_SELECTED_BUN') !== null) {
      dispatch(changeBunAction(JSON.parse(window.localStorage.getItem('BURGER_SELECTED_BUN')!)))
      window.localStorage.removeItem('BURGER_SELECTED_BUN')
    }
    if (window.localStorage.getItem('BURGER_SELECTED_INGREDIENTS') !== null) {
      dispatch(restoreTngredientToOrderAction(JSON.parse(window.localStorage.getItem('BURGER_SELECTED_INGREDIENTS')!)))
      window.localStorage.removeItem('BURGER_SELECTED_INGREDIENTS')
    }
  }, [])
  let total = useMemo(() => {
    return selectedIngredients.reduce((prev: number, curr: TBurgerIngredientInfo) => prev + curr.price, selectedBun.price * 2)
  }, [selectedIngredients, selectedBun])
  const [{isHover}, drop] = useDrop({
    accept: "ingredient",
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(item:any) {
      console.log(item);
      if (item.info.type === 'bun') {
        dispatch(changeBunAction(item.info))
      } else {
        dispatch(addIngredientToOrderAction(item.info))
      }
    },
  });

  return (
    <section ref={drop} className={clsx('ml-5', 'mr-5', BrgCnstrStyle.section, 'pt-25', 'pl-4')}>
      <ConstructorElement {...selectedBun} text={selectedBun.name + '(верх)'} thumbnail={selectedBun.image} type={'top'}
                          isLocked={true} extraClass={clsx('mb-4', 'ml-8')}/>
      <ul className={clsx(BrgCnstrStyle.editedList)}>
        {selectedIngredients.map((item: TBurgerIngredientInfo, index: number) => {
          return (
            <BurgerConstructorIngredient key={index} item={item} index={index}/>
          )
        })}
      </ul>
      <ConstructorElement {...selectedBun} text={selectedBun.name + '(низ)'} thumbnail={selectedBun.image}
                          type={'bottom'}
                          isLocked={true} extraClass={'mt-4 ml-8'}/>
      <div className={clsx('mt-10', BrgCnstrStyle.total)}>
        <div className={clsx('text text_type_main-large', BrgCnstrStyle.amount)}>
          <p
            className="text text_type_digits-medium">{total}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-10 mr-4" onClick={() => {
          if (isAuthSuccess) {

            dispatch(postOrder(accessToken, [selectedBun._id, selectedIngredients.map((item: TBurgerIngredientInfo) => item._id)].flat()));

            setModalOrderActive(true);
          } else {
            window.localStorage.setItem('BURGER_SELECTED_BUN', JSON.stringify(selectedBun));
            window.localStorage.setItem('BURGER_SELECTED_INGREDIENTS', JSON.stringify(selectedIngredients));
            navigate('/login')
          }
        }}>
          Оформить заказ
        </Button>
      </div>

      <Modal isActive={isModalOrderActive} setter={setModalOrderActive}>
        <OrderInfo/>
      </Modal>

    </section>
  );
};

export default BurgerConstructor;
