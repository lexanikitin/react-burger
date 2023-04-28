import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import {useDispatch, useSelector} from "../../services/hooks";
import {

  getIngredientsList,

  privateFeedClearCurrentOrderAction,
  privateFeedSetCurrentOrderAction
} from "../../services/actions";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";
import styles from "./profile-orders.module.css";
import OrderCard from "../../components/order-card/OrderCard";
import Modal from "../../components/modal/Modal";
import PrivateOrderDetails from "../../components/private-order-details/PrivateOrderDetails";
import {useLocation} from "react-router-dom";
import {
  wsPrivateFeedConnectionClosedAction,
  wsPrivateFeedConnectionStartAction
} from "../../services/action-types";

const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {ingredientsList} = useSelector(store => store.list);
  const {ordersPr} = useSelector(store => store.privateFeed);
  const [isDataReady, setDataReady] = useState<boolean>(false);
  const [isModalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    if (ingredientsList[0] === undefined) {
      dispatch(getIngredientsList());
    }
    dispatch(wsPrivateFeedConnectionStartAction)
    return () => {
      dispatch(wsPrivateFeedConnectionClosedAction)
    }

  }, [])
  useEffect(() => {
    if (ordersPr) {
      setDataReady(true)
    }
  }, [ordersPr])
  useEffect(() => {
    if (isModalActive === false) {

      dispatch(privateFeedClearCurrentOrderAction)
    }
  }, [isModalActive]);
  useEffect(() => {
    if (location.state) {
      dispatch(privateFeedSetCurrentOrderAction(JSON.parse(location.state).order, JSON.parse(location.state).ingredients, JSON.parse(location.state).total))
      setModalActive(true);
    }
  }, [])


  return (
    <>
      {isDataReady ?
        <ul className={clsx(styles.list)}>
          {ordersPr.map((item, index) => {
            return (
              <OrderCard key={index} order={item} setModalActive={setModalActive}/>
            );
          })}
        </ul>
        :
        <p className="text text_type_main-medium">Идет загрузка....</p>
      }
      <Modal isActive={isModalActive} setter={setModalActive}>
        <PrivateOrderDetails/>
      </Modal>

    </>)

};
export default ProfileOrders;
