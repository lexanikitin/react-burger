import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import styles from "./feed-list.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import {useSelector} from "react-redux";
import OrderCard from "../order-card/OrderCard";

const FeedList = () => {
  const [isModalActive, setModalActive] = useState(false);
  const {orders} = useSelector(store => store.feed);
  return (
    <section className={clsx(styles.section)}>
      <ul className={clsx(styles.list)} >
        {orders.map((item, index) => {
          return (
            <OrderCard key={index} order={item} setModalActive={setModalActive}/>
          );
        })}
      </ul>

      <Modal isActive={isModalActive} setter={setModalActive}>
        <div></div>
      </Modal>

    </section>
  );
};

export default FeedList;
