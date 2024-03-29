import React, {useMemo} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './burger-ingredient.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";
import {burgerProps} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_SET_CURRENT_INGREDIENT} from "../../services/actions/modal";
import {useDrag} from "react-dnd";

const BurgerIngredient = ({info, setModalActive}) => {
  const dispatch = useDispatch();
  const id = info._id;
  const {selectedIngredients, selectedBun} = useSelector(store => store.order);
  const count = useMemo(() => {
    return [selectedIngredients, selectedBun].flat().filter(item => item._id === info._id).length
  }, [selectedIngredients, selectedBun]);
  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: {info},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  return (
    <li ref={drag} className={clsx(cardStyles.card)} onClick={() => {
      dispatch({
        type: MODAL_SET_CURRENT_INGREDIENT,
        currentData: info
      })
      setModalActive(true);
    }}>
      {count ? <Counter count={count} size={"default"} extraClass="m-1"/> : ''}
      <img src={info.image} alt={info.name}/>
      <div className={clsx('pt-1 pb-1', cardStyles.price)}>
        <p className={`text text_type_digits-default`}>{info.price} </p>
        <CurrencyIcon type="primary"/>
      </div>
      <p className={clsx('mt-2 mb-6 text text text_type_main-default', cardStyles.name)}>{info.name}</p>
    </li>
  );
};

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  info: PropTypes.shape(burgerProps.isRequired).isRequired,
  setModalActive: PropTypes.func.isRequired
};
