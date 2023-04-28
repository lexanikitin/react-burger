import React, {FC, useEffect, useState} from 'react';
import styles from "../register/register.module.css";
import clsx from "clsx";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hooks";
import {postForgotPassword} from "../../services/actions/auth";

const ForgotPassword:FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({email: ''});
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  const {forgotPasswordIsSuccess} = useSelector(store => store.auth);
  useEffect(() => {
    if (forgotPasswordIsSuccess) {
      navigate('/reset-password', {state: {fromForgotPasswordPage: true}})
    }
  }, [forgotPasswordIsSuccess]);
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')} onSubmit={(e) => {
        e.preventDefault();

        dispatch(postForgotPassword(formValue.email));
      }}>
        <h1 className={'pb-6 text text_type_main-medium'}>Восстановление пароля</h1>
        <EmailInput
          placeholder={'Укажите e-mail'}
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
          onChange={onChange}
          value={formValue.email}
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

export default ForgotPassword;
