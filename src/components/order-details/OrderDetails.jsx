import React, {useEffect} from 'react';
import styles from './order-details.module.css';
import {useSelector} from "react-redux";
import clsx from "clsx";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = () => {
    const {modalSelected} = useSelector(store => store.feed);
    useEffect(() => {
      if (modalSelected.order._id) {
        window.history.replaceState(null, "", "/feed/:" + modalSelected.order._id)
      } else {
        window.history.replaceState(null, "", "/feed")
      }
    }, [modalSelected])

    return (
      <div className={styles.wrapper}>
        <p className={clsx(styles.id, 'text text_type_digits-default pb-10')}># {modalSelected.order.number}</p>
        <p className={clsx(styles.name, 'text text_type_main-medium pb-3')}>{modalSelected.order.name}</p>
        {modalSelected.order.status === 'done' ?
          <p className={clsx(styles.statusDone, 'text text_type_main-small pb-15')}>Выполнен</p>
          :
          <p className={styles.statusOther}>Отменен</p>
        }
        <p className={clsx(styles.ingHeader, 'text_type_main-medium pb-6')}>Состав:</p>
        <ul className={clsx(styles.ingList, 'mb-10')}>
          {modalSelected.ingredients.map((item, index) => {
            return (
              <li key={index} className={styles.ingredient}>
                <div className={styles.ingWrapper}>
                  <img key={index} className={styles.ingImage} src={item.image} alt={item.name}/>
                  <p className={clsx(styles.ingName, 'text text_type_main-small')}>{item.name}</p>
                </div>
                <div className={clsx('text text_type_main-large', styles.ingPrice)}>
                  <p className="text text_type_digits-default">{index === 0 ? '2' : '1'} x {item.price}</p>
                  <CurrencyIcon type="primary"/>
                </div>
              </li>
            )
          })}
        </ul>
        <div className={styles.footer}>
          <FormattedDate className={clsx(styles.date, 'text text_type_main-default text_color_inactive')}
                         date={new Date(modalSelected.order.createdAt)}/>
          <div className={clsx('text text_type_main-large', styles.total)}>
            <p className="text text_type_digits-default">{modalSelected.total}</p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
    );
  }
;

export default OrderDetails;
