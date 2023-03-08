import React, {useState} from 'react';
import styles from './reset-password.module.css'
import clsx from "clsx";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {postResetPasswordToApi} from "../../utils/burger-api";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({password: '', token: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Восстановление пароля</h1>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          name={'password'}
          extraClass='pb-6'
          onChange={onChange}
          value={formValue.password}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          name={'token'}
          error={false}
          size={'default'}
          extraClass="pb-6"
          onChange={onChange}
          value={formValue.token}
        />

        <Button htmlType='button' type='primary' size='medium' onClick={() => {
          dispatch(postResetPasswordToApi(formValue.password, formValue.token));
          //TODO: Сообщение + переадресация
        }}>
          Сохранить
        </Button>
      </form>

      <p className={'text text_type_main-default text_color_inactive'}>Вспомнили пароль?&nbsp;
        <Link className={styles.link} to={'/login'}>Войти</Link>
      </p>
    </div>
  );

};

export default ResetPassword;
