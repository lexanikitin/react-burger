import React, {useEffect, useState} from 'react';
import styles from './reset-password.module.css'
import clsx from "clsx";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postResetPasswordToApi} from "../../utils/burger-api";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formValue, setFormValue] = useState({password: '', token: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  const {resetPasswordIsSuccess} = useSelector(store => store.auth);
  useEffect(() => {
    if (resetPasswordIsSuccess) {
      navigate('/login')
    }
  }, [resetPasswordIsSuccess])
  useEffect(()=>{
    if(!location.state?.fromForgotPasswordPage) {navigate('/login')}
  },[])
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')} onSubmit={(e) => {
        e.preventDefault();
        dispatch(postResetPasswordToApi(formValue.password, formValue.token));
      }}>
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

export default ResetPassword;
