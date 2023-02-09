import React, {useRef} from 'react';
import clsx from "clsx";
import BrgCnstrIngrStyle from "./burger-constructor-ingredient.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DRAG_SELECTED_INGREDIENT_TO_POSITION, REMOVE_INGREDIENT_FROM_ORDER} from "../../services/actions/actions";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";

const BurgerConstructorIngredient = ({item, index}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = item._id;

  const [{isDragging}, drag] = useDrag({
    type: "ingredientInOrder",
    item: () => {
      return {id, index}
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{handlerId}, drop] = useDrop({
    accept: "ingredientInOrder",
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch({
        type: DRAG_SELECTED_INGREDIENT_TO_POSITION,
        dragged: dragIndex,
        hovered: hoverIndex
      });
      item.index = hoverIndex;
    },
  });
  const opacity = isDragging ? 0 : 1
  drag(drop(ref));
  const handleDeleteIngredient = (index) => {
    dispatch({
      type: REMOVE_INGREDIENT_FROM_ORDER,
      index: index
    })
  }
  return (
    <li ref={ref} style={{opacity}} className={clsx(BrgCnstrIngrStyle.editedItem)} data-handler-id={handlerId}>
      <DragIcon type="primary"/>
      <ConstructorElement {...item} text={item.name} thumbnail={item.image}
                          handleClose={() => {
                            handleDeleteIngredient(index)
                          }}/>
    </li>
  );
};

export default BurgerConstructorIngredient;
