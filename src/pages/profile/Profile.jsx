import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import styles from './profile.module.css'
import clsx from "clsx";
import {getCookie} from "../../utils/cookies";
import {getProfile} from "../../services/actions/auth";

const Profile = () => {
  const refreshToken = getCookie('burgerRefreshToken')
  const dispatch = useDispatch();
  const {user, isAuthSuccess, accessToken} = useSelector(store => store.auth);
  const [formValue, setFormValue] = useState({name: user.name, email: user.email, password: '***'});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }
  useEffect(() => {
    console.log(isAuthSuccess);
    if (!isAuthSuccess) {
      dispatch(getProfile(accessToken))
      console.log(isAuthSuccess);

    }
  }, [])

  return (
    <main className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <NavLink to={"/profile"}
                     className={clsx(styles.link, styles.link_active, 'text', 'text_type_main-medium')}>Профиль</NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to={"/profile"} className={clsx(styles.link, 'text', 'text_type_main-medium')}>История
              заказов</NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to={"/profile"} className={clsx(styles.link, 'text', 'text_type_main-medium')}>Выход</NavLink>
          </li>
        </ul>
        <p className={clsx(styles.desc, 'text', 'text_type_main-default', 'text_color_inactive', 'pt-20')}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={'pl-15'}>
        <Input type={"text"} extraClass={``} placeholder={'Имя'} value={user.name} name={"name"}
               onChange={onChange} icon={"EditIcon"}/>
        <EmailInput extraClass={`mt-6`} placeholder={'Логин'} value={user.email} name={"email"} onChange={onChange}
                    icon={"EditIcon"}/>
        <PasswordInput extraClass={`mt-6`} placeholder={'Пароль'} value={'**'} name={"password"}
                       onChange={onChange}
                       icon={"EditIcon"}/>
      </form>
    </main>
  );
};

export default Profile;
