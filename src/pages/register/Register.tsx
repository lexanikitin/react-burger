import React, {FC, useEffect, useState} from 'react';
import styles from './register.module.css'
import clsx from "clsx";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {postRegister} from "../../services/actions/auth";
import {useDispatch, useSelector} from "../../services/hooks";

const Register:FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<{email: string, name: string, password: string}>({email: '', name: '', password: ''});
  const {registerIsSuccess} = useSelector(store => store.auth);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  useEffect(()=>{
    if(registerIsSuccess === true){navigate('/')}
  },[registerIsSuccess])
  return (
    <div className={styles.wrapper}>
      <form className={clsx(styles.form, 'pb-20')} onSubmit={(e)=>{
        e.preventDefault();
        // @ts-ignore
        dispatch(postRegister(formValue.email, formValue.password, formValue.name));
      }}>
        <h1 className={'pb-6 text text_type_main-medium'}>Регистрация</h1>
        <Input
          type={'text'}
          placeholder={'Имя'}
          name={'name'}
          error={false}
          size={'default'}
          extraClass="pb-6"
          onChange={onChange}
          value={formValue.name}
          required={true}
        />
        <EmailInput
          name={'email'}
          isIcon={false}
          extraClass={'pb-6'}
          onChange={onChange}
          value={formValue.email}
          required={true}

        />
        <PasswordInput
          name={'password'}
          extraClass='pb-6'
          onChange={onChange}
          value={formValue.password}
          required={true}
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
