import React, {useEffect, useState} from 'react';
import styles from './order-pics.module.css';
import clsx from "clsx";


const OrderPics = ({ingredientList}) => {
  const [additionalNum, setAdditionalNum] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (ingredientList.length > 7) {
      setAdditionalNum(ingredientList.length - 7);
      setList(ingredientList.slice(0, 7));
    } else {
      setList(ingredientList);
    }
  }, [])
  return (
    <>
      <ul className={styles.list}>
        {list.map((item, index) => {
          return <img className={styles.item} src={item.image} alt={item.name}/>

        })}

      </ul>
      {additionalNum > 0 ?
        <span className={clsx('text text_type_main-medium', styles.additionalNum)}> +{additionalNum} </span>
        : ''
      }
    </>
  );
};

export default OrderPics;
