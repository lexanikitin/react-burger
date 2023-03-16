import React, {useEffect} from 'react';
import styles from "./feed.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsList} from "../../services/actions/list";
import clsx from "clsx";
import FeedList from "../../components/feed-list/FeedList";

const Feed = () => {
  const dispatch = useDispatch();
  const {isRequested, isFailed} = useSelector(store => store.list);
  const {ingredientsList} = useSelector(store => store.list);

  useEffect(() => {
    if (ingredientsList[0] === undefined) {
      dispatch(getIngredientsList());
    }
  }, []);

  return (
    <main className={styles.main_content}>
      {
        isRequested && !isFailed ? <p className="text text_type_main-medium">Идет загрузка...</p>
          :
          <>
            <h1 className={clsx('text', 'text_type_main-large', 'pb-5')}>Лента заказов</h1>
            <FeedList/>
          </>
      }
    </main>
  );
};

export default Feed;
