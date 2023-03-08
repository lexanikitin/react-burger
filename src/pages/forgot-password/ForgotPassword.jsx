import React, {useState} from 'react';
import styles from "../register/register.module.css";
import clsx from "clsx";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {postForgotPassword} from "../../services/actions/auth";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({email: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
        <h1 className={'pb-6 text text_type_main-medium'}>Восстановление пароля</h1>
        <EmailInput
          placeholder={'Укажите e-mail'}
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
          onChange={onChange}
          value={formValue.email}
        />
        <Button htmlType='button' type='primary' size='medium' onClick={() => {
          dispatch(postForgotPassword(formValue.email));
          //TODO: Переадресация на страницу смены пароля при успешном запросе
        }}>
          Восстановить
        </Button>
      </form>

      <p className={'text text_type_main-default text_color_inactive'}>Вспомнили пароль?&nbsp;
        <Link className={styles.link} to={'/login'}>Войти</Link>
      </p>
    </div>
  );


};

export default ForgotPassword;
