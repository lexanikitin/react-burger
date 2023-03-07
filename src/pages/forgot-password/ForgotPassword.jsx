import React from 'react';
import styles from "../register/register.module.css";
import clsx from "clsx";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Восстановление пароля</h1>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          name={'password'}
          extraClass='pb-6'
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          name={'code'}
          error={false}
          size={'default'}
          extraClass="pb-6"
        />

        <Button htmlType='submit' type='primary' size='medium'>
          Сохранить
        </Button>
      </form>

      <p className={'text text_type_main-default text_color_inactive'}>Вспомнили пароль?&nbsp;
        <Link className={styles.link} to={'/login'}>Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
