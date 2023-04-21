import React from 'react';
import styles from "../login/login.module.css";
import {Link} from "react-router-dom";
import clsx from "clsx";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={'pb-6 text text_type_main-medium'}>Страница не найдена</h1>
      <Link className={clsx(styles.link, 'pb-4 text text_type_main-default ')}
            to={'/'}>Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
