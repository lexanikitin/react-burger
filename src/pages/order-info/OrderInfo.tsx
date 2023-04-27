import React, {FC, useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {FEED_SET_CURRENT_ORDER, feedSetCurrentOrderAction, getIngredientsList} from "../../services/actions";
import {useDispatch, useSelector} from "../../services/hooks";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START, WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_START, wsFeedConnectionClosedAction, wsFeedConnectionStartAction
} from "../../services/action-types";
import {TBurgerIngredientInfo} from "../../utils/types";

const OrderInfo:FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {orders, isConnected, total} = useSelector(store => store.feed);
  const {ordersPr, isConnectedPr} = useSelector(store => store.privateFeed);
  const {ingredientsList, isSuccessful} = useSelector(store => store.list);
  const [isDataReady, setDataReady] = useState<boolean>(false);

  let {id} = useParams();

  useEffect(() => {
      if (window.localStorage.getItem('MODAL_FEED_ORDER_STATE') !== null) {
        navigate('/feed', {state: window.localStorage.getItem('MODAL_FEED_ORDER_STATE')});
      }
      dispatch(getIngredientsList());
      dispatch(wsFeedConnectionStartAction)
      return () => {
        dispatch(wsFeedConnectionClosedAction)
      }
    }
    ,
    []
  )
  ;

  useEffect(() => {

    if ((isConnected === true || isConnectedPr === true) && isSuccessful === true && (orders.length !== 0 || ordersPr.length !== 0)) {
      var order = orders.filter((item) => {

        // @ts-ignore
        return item._id === id.substring(1);
      })[0];
      // @ts-ignore
      var ingList:TBurgerIngredientInfo[] = order.ingredients.map((item, index:number) => {
        return ingredientsList.find((el) => {
          return el._id === item
        });
      })
      var orderSum = ingList.reduce((prev, curr) => curr.type === 'bun' ? prev + curr.price * 2 : prev + curr.price, 0);

      dispatch(feedSetCurrentOrderAction(order, ingList, orderSum))
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
