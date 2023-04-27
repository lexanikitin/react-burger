import React, {FC, useMemo} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './burger-ingredient.module.css'
import clsx from "clsx";

import {MODAL_SET_CURRENT_INGREDIENT, setCurrentIngredientAction} from "../../services/actions/modal";
import {useDrag} from "react-dnd";
import {TBurgerIngredientInfo} from "../../utils/types";
import {useDispatch, useSelector} from "../../services/hooks";

type TBurgerIngredient = {
  info: TBurgerIngredientInfo;
  setModalActive: Function;
}
const BurgerIngredient: FC<TBurgerIngredient> = ({info, setModalActive}) => {
  const dispatch = useDispatch();
  const {selectedIngredients, selectedBun} = useSelector(store => store.order);
  const count = useMemo<number | undefined>(() => {
    return [selectedIngredients, selectedBun].flat().filter((item: TBurgerIngredientInfo) => item._id === info._id).length
  }, [selectedIngredients, selectedBun]);
  const [{isDrag}, drag] = useDrag({
    type: "ingredient",
    item: {info},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  return (
    <li ref={drag} className={clsx(cardStyles.card)} onClick={() => {
      dispatch(setCurrentIngredientAction(info));
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
