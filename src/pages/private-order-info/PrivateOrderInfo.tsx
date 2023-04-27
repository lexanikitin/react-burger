import React, {FC, useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {
  FEED_SET_CURRENT_ORDER,
  getIngredientsList,
  PRIVATE_FEED_SET_CURRENT_ORDER,
  privateFeedSetCurrentOrderAction
} from "../../services/actions";
import {useDispatch, useSelector} from "../../services/hooks";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START, WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_START, wsFeedConnectionClosedAction, wsPrivateFeedConnectionStartAction
} from "../../services/action-types";
import ProfileOrderDetails from "../../components/profile-order-details/ProfileOrderDetails";
import {TBurgerIngredientInfo} from "../../utils/types";

const PrivateOrderInfo:FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {ordersPr, isConnectedPr} = useSelector(store => store.privateFeed);
  const {ingredientsList, isSuccessful} = useSelector(store => store.list);
  const [isDataReady, setDataReady] = useState<boolean>(false);

  let {id} = useParams();

  useEffect(() => {
      if (window.localStorage.getItem('MODAL_PRIVATE_FEED_ORDER_STATE') !== null) {
        navigate('/profile/orders', {state: window.localStorage.getItem('MODAL_PRIVATE_FEED_ORDER_STATE')});
      }
      console.log(id)

      dispatch(getIngredientsList());
      dispatch(wsPrivateFeedConnectionStartAction)
      return () => {
        dispatch(wsFeedConnectionClosedAction)
      }
    }
    ,
    []
  );

  useEffect(() => {
    console.log(isConnectedPr)
    console.log(isSuccessful)
    console.log(ordersPr)

    if (isConnectedPr === true && isSuccessful === true && ordersPr.length !== 0 ) {
      var order = ordersPr.filter((item) => {
        // @ts-ignore
        return item._id === id.substring(1);
      })[0];
      // @ts-ignore
      var ingList:TBurgerIngredientInfo[] = order.ingredients.map((item, index) => {
        return ingredientsList.find((el) => {
          return el._id === item
        });
      })
      var orderSum = ingList.reduce((prev, curr) => curr.type === 'bun' ? prev + curr.price * 2 : prev + curr.price, 0);
      console.log(order)
      dispatch(privateFeedSetCurrentOrderAction(order, ingList, orderSum))
      navigate('/profile', {state: {PRIVATE_FEED_ORDER_STATE : true}})
    }
  }, [isSuccessful, ordersPr,isConnectedPr])


  return (
    <>
      {isDataReady ?
        <ProfileOrderDetails/>
        :
        <p className="text text_type_main-medium">Идет загрузка.....</p>
      }
    </>)

};

export default PrivateOrderInfo;
