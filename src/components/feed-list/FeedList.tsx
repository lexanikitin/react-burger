import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import styles from "./feed-list.module.css";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import OrderCard from "../order-card/OrderCard";
import OrderDetails from "../order-details/OrderDetails";
import {FEED_CLEAR_CURRENT_ORDER, FEED_SET_CURRENT_ORDER} from "../../services/actions/feed";
import {useLocation} from "react-router-dom";
import {TOrder} from "../../utils/types";

const FeedList: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isModalActive, setModalActive] = useState<boolean>(false);
  //@ts-ignore
  const {orders} = useSelector(store => store.feed);
  useEffect(() => {
    if (isModalActive === false) {
      dispatch({
        type: FEED_CLEAR_CURRENT_ORDER
      })
    }
  }, [isModalActive]);
  useEffect(() => {
    if (location.state) {
      dispatch({
        type: FEED_SET_CURRENT_ORDER,
        selectedOrder: JSON.parse(location.state).order,
        selectedList: JSON.parse(location.state).ingredients,
        selectedTotal: JSON.parse(location.state).total,
      })
      setModalActive(true);
    }
  }, [])

  return (
    <section className={clsx(styles.section)}>
      <ul className={clsx(styles.list)}>
        {orders.map((item:TOrder, index:number) => {
          return (
            <OrderCard key={index} order={item} setModalActive={setModalActive}/>
          );
        })}
      </ul>

      <Modal isActive={isModalActive} setter={setModalActive}>
        <OrderDetails/>
      </Modal>

    </section>
  );
};

export default FeedList;