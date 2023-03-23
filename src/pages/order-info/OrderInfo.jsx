import React, {useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {FEED_SET_CURRENT_ORDER, getIngredientsList} from "../../services/actions";
import {useDispatch, useSelector} from "react-redux";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START, WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_START
} from "../../services/action-types";

const OrderInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {orders, isConnected, total} = useSelector(store => store.feed);
  const {ordersPr, isConnectedPr} = useSelector(store => store.privateFeed);
  const {ingredientsList, isSuccessful} = useSelector(store => store.list);
  const [isDataReady, setDataReady] = useState(false);

  let {id} = useParams();

  useEffect(() => {
      if (window.localStorage.getItem('MODAL_FEED_ORDER_STATE') !== null) {
        navigate('/feed', {state: window.localStorage.getItem('MODAL_FEED_ORDER_STATE')});
      }
      dispatch(getIngredientsList());
      dispatch({type: WS_FEED_CONNECTION_START});
      return () => {
        dispatch({type: WS_FEED_CONNECTION_CLOSED})
      }
    }
    ,
    []
  )
  ;

  useEffect(() => {

    if ((isConnected === true || isConnectedPr === true) && isSuccessful === true && (orders.length !== 0 || ordersPr.length !== 0)) {
      var order = orders.filter((item) => {
        return item._id === id.substring(1);
      })[0];
      var ingList = order.ingredients.map((item, index) => {
        return ingredientsList.find((el) => {
          return el._id === item
        });
      })
      var orderSum = ingList.reduce((prev, curr) => curr.type === 'bun' ? prev + curr.price * 2 : prev + curr.price, 0);
      dispatch({
        type: FEED_SET_CURRENT_ORDER,
        selectedOrder: order,
        selectedList: ingList,
        selectedTotal: orderSum,
      })
      setDataReady(true);
    }
  }, [isConnected, total, isSuccessful])


  return (
    <>
      {isDataReady ?
        <OrderDetailsPage/>
        :
        <p className="text text_type_main-medium">Идет загрузка...</p>
      }
    </>)

};

export default OrderInfo;
