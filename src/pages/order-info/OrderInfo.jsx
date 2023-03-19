import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {FEED_SET_CURRENT_ORDER, getIngredientsList} from "../../services/actions";
import {useDispatch, useSelector} from "react-redux";
import OrderDetailsPage from "../orderDetailsPage/OrderDetailsPage";

const OrderInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {orders, isConnected} = useSelector(store => store.feed);
  const {ingredientsList} = useSelector(store => store.list);
  const [isDataReady, setDataReady] = useState(false);

  let {id} = useParams();

  useEffect(() => {
    if (window.localStorage.getItem('MODAL_FEED_ORDER_STATE') !== null) {
      navigate('/feed', {state: window.localStorage.getItem('MODAL_FEED_ORDER_STATE')});
    }

    dispatch(getIngredientsList());
    dispatch({type: 'WS_FEED_CONNECTION_START'});

  }, []);

  const order = useMemo(() => {
    return orders.filter((item) => {
      return item._id === id.substring(1);
    })[0]
  }, [orders])

  const ingList = useMemo(() => {
    if (order) {
      return order.ingredients.map((item, index) => {
        return ingredientsList.find((el) => {
          return el._id === item
        });
      })
    }
  }, [order, ingredientsList])

  const orderSum = useMemo(() => {
    if (ingList) {
      return ingList.reduce((prev, curr) => curr.type === 'bun' ? prev + curr.price * 2 : prev + curr.price, 0)
    }
  }, [ingList])

  useEffect(() => {
    if (orders) {
      dispatch({
        type: FEED_SET_CURRENT_ORDER,
        selectedOrder: order,
        selectedList: ingList,
        selectedTotal: orderSum,
      })
      setDataReady(true);
    }
  }, [orderSum])


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
