import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {
  FEED_CLEAR_CURRENT_ORDER,
  FEED_SET_CURRENT_ORDER,
  getIngredientsList,
  PRIVATE_FEED_CLEAR_CURRENT_ORDER, PRIVATE_FEED_SET_CURRENT_ORDER
} from "../../services/actions";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";
import styles from "./profile-orders.module.css";
import OrderCard from "../../components/order-card/OrderCard";
import Modal from "../../components/modal/Modal";
import PrivateOrderDetails from "../../components/private-order-details/PrivateOrderDetails";
import {useLocation} from "react-router-dom";
import {WS_PRIVATE_FEED_CONNECTION_START} from "../../services/action-types";
import {WS_PRIVATE_FEED_CONNECTION_CLOSED} from "../../services/action-types";

const ProfileOrders = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {ingredientsList} = useSelector(store => store.list);
  const {ordersPr} = useSelector(store => store.privateFeed);
  const [isDataReady, setDataReady] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (ingredientsList[0] === undefined) {
      dispatch(getIngredientsList());
    }
    dispatch({type: WS_PRIVATE_FEED_CONNECTION_START})
    return () => {
      dispatch({type: WS_PRIVATE_FEED_CONNECTION_CLOSED})
    }

  }, [])
  useEffect(() => {
    if (ordersPr) {
      setDataReady(true)
    }
  }, [ordersPr])
  useEffect(() => {
    if (isModalActive === false) {
      dispatch({
        type: PRIVATE_FEED_CLEAR_CURRENT_ORDER
      })
    }
  }, [isModalActive]);
  useEffect(() => {
    if (location.state) {

      dispatch({
        type: PRIVATE_FEED_SET_CURRENT_ORDER,
        selectedOrder: JSON.parse(location.state).order,
        selectedList: JSON.parse(location.state).ingredients,
        selectedTotal: JSON.parse(location.state).total,
      })
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
