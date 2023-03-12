import React, {useEffect, useState} from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from 'react-router-dom';
import styles from './login.module.css'
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../services/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loginIsSuccess} = useSelector(store => store.auth);
  useEffect(()=>{if(loginIsSuccess){navigate('/')}},[loginIsSuccess]);
  const [formValue, setFormValue] = useState({email: '', password: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }

  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')} onSubmit={(e)=>{
        e.preventDefault();
        dispatch(postLogin(formValue.email, formValue.password))
        // TODO переадресация на корень
      }}>
        <h1 className={'pb-6 text text_type_main-medium'}>Вход</h1>
        <EmailInput
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
          onChange={onChange}
          value={formValue.name}
          required={true}

        />
        <PasswordInput
          name={'password'}
          extraClass='pb-6'
          onChange={onChange}
          value={formValue.name}
          required={true}

        />
        <Button htmlType='submit' type='primary' size='medium' >
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
