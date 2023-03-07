import React from 'react';
import styles from './register.module.css'
import clsx from "clsx";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Регистрация</h1>
        <Input
          type={'text'}
          placeholder={'Имя'}
          name={'name'}
          error={false}
          size={'default'}
          extraClass="pb-6"
        />
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
          Зарегистрироваться
        </Button>
      </form>

      <p className={'text text_type_main-default text_color_inactive'}>Уже зарегистрированы?&nbsp;
        <Link className={styles.link} to={'/login'}>Войти</Link>
      </p>
    </div>
  );
};

export default Register;
