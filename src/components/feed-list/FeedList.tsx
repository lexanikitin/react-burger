import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import styles from "./feed-list.module.css";
import Modal from "../modal/Modal";

import OrderCard from "../order-card/OrderCard";
import OrderDetails from "../order-details/OrderDetails";
import {
  feedClearCurrentOrderAction, feedSetCurrentOrderAction
} from "../../services/actions/feed";
import {useLocation} from "react-router-dom";
import {TOrder} from "../../utils/types";
import {useDispatch, useSelector} from "../../services/hooks";

const FeedList: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isModalActive, setModalActive] = useState<boolean>(false);

  const {orders} = useSelector(store => store.feed);
  useEffect(() => {
    if (isModalActive === false) {
      dispatch(feedClearCurrentOrderAction)
    }
  }, [isModalActive]);
  useEffect(() => {
    if (location.state) {
      dispatch(feedSetCurrentOrderAction(JSON.parse(location.state).order, JSON.parse(location.state).ingredients, JSON.parse(location.state).total))
      setModalActive(true);
    }
  }, [])

  return (
    <section className={clsx(styles.section)}>
      <ul className={clsx(styles.list)}>
        {orders.map((item: TOrder, index: number) => {
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
