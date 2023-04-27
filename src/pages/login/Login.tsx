import React, {FC, useEffect, useState} from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from 'react-router-dom';
import styles from './login.module.css'
import clsx from "clsx";
import {useDispatch, useSelector} from "../../services/hooks";
import {postLogin} from "../../services/actions/auth";

const Login:FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<{email:string, password:string}>({email: '', password: ''});
  const {loginIsSuccess} = useSelector(store => store.auth);

  useEffect(() => {
    if (loginIsSuccess===true) {
      navigate('/')
    }
  }, [loginIsSuccess])

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }

  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')} onSubmit={(e)=>{
        e.preventDefault();

        dispatch(postLogin(formValue.email, formValue.password))
      }}>
        <h1 className={'pb-6 text text_type_main-medium'}>Вход</h1>
        <EmailInput
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
          onChange={onChange}
          value={formValue.email}
        />
        <PasswordInput
          name={'password'}
          extraClass='pb-6'
          onChange={onChange}
          value={formValue.password}
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
