import React from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from 'react-router-dom';
import styles from './login.module.css'
import clsx from "clsx";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Вход</h1>
        <EmailInput
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
        />
        <PasswordInput
          name={'password'}
          extraClass='pb-6'
        />
        <Button htmlType='submit' type='primary' size='medium'>
          Войти
        </Button>
      </form>

      <p className={'pb-4 text text_type_main-default text_color_inactive'}>Вы - новый пользователь?&nbsp;
        <Link className={styles.link} to={'/register'}>Зарегистрироваться</Link>
      </p>
      <p className={'text text_type_main-default text_color_inactive'}>Забыли пароль?&nbsp;
        <Link className={styles.link} to={'/forgot-password'}>Восстановить пароль</Link>
      </p>
    </div>
  );
};

export default Login;
