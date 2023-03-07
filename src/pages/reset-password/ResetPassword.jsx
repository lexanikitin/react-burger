import React from 'react';
import styles from './reset-password.module.css'
import clsx from "clsx";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Восстановление пароля</h1>
        <EmailInput
          placeholder={'Укажите e-mail'}
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
        />
        <Button htmlType='submit' type='primary' size='medium'>
          Восстановить
        </Button>
      </form>

      <p className={'text text_type_main-default text_color_inactive'}>Вспомнили пароль?&nbsp;
        <Link className={styles.link} to={'/login'}>Войти</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
