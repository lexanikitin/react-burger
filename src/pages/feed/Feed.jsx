import React, {useEffect} from 'react';
import styles from "./feed.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsList} from "../../services/actions/list";
import clsx from "clsx";
import FeedList from "../../components/feed-list/FeedList";
import {WS_FEED_CONNECTION_CLOSED, WS_FEED_CONNECTION_START} from "../../services/action-types";

const Feed = () => {
  const dispatch = useDispatch();
  const {isSuccessful} = useSelector(store => store.list);
  const {ingredientsList} = useSelector(store => store.list);
  const {isConnected, total, totalToday, ordersReady, ordersNotReady} = useSelector(store => store.feed);

  useEffect(() => {
    if (ingredientsList[0] === undefined) {
      dispatch(getIngredientsList());
    }
    dispatch({type: WS_FEED_CONNECTION_START})
    return () => {
      dispatch({type: WS_FEED_CONNECTION_CLOSED})
    }

  }, []);


  return (
    <main className={styles.main_content}>
      {
        isSuccessful ?
          <>
            <h1 className={clsx('text', 'text_type_main-large', 'pb-5')}>Лента заказов</h1>
            <div className={clsx(styles.wrapper)}>
              <FeedList/>
              <div className={clsx(styles.dataSection)}>
                <div className={styles.ordersLists}>
                  <div className={styles.ordersList}>
                    <p className={clsx(styles.orderListHeader, 'text text_type_main-medium', 'pb-6')}>Готовы:</p>
                    <ul className={styles.doneList}>
                      {ordersReady.map((item, index) => {
                        return (<li key={index} className={clsx('text text_type_digits-default')}>{item}</li>)
                      })}
                    </ul>
                  </div>
                  <div className={styles.ordersList}>
                    <p className={clsx(styles.orderListHeader, 'text text_type_main-medium', 'pb-6')}>В работе:</p>
                    <ul className={styles.undoneList}>
                      {ordersNotReady.map((item, index) => {
                        return (<li key={index} className={clsx('text text_type_digits-default')}>{item}</li>)
                      })}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className={clsx(styles.orderListHeader, 'text text_type_main-medium')}>Выполнено за все время:</p>
                  <p className={clsx(styles.total, "text text_type_digits-large")}>{total}</p>
                </div>
                <div>
                  <p className={clsx(styles.orderListHeader, 'text text_type_main-medium')}>Выполнено за сегодня:</p>
                  <p className={clsx(styles.total, "text text_type_digits-large")}>{totalToday}</p>
                </div>
              </div>
            </div>
          </>
          :
          <p className="text text_type_main-medium">Идет загрузка...</p>
      }
    </main>
  );
};

export default Feed;
