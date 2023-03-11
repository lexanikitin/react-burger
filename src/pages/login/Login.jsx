import React, {useState} from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from 'react-router-dom';
import styles from './login.module.css'
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {postLogin} from "../../services/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({email: '', password: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }

  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')}>
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
        <Button htmlType='button' type='primary' size='medium' onClick={()=>{
          dispatch(postLogin(formValue.email, formValue.password))
          // TODO переадресация на корень
        }}>
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
