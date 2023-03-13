import React, {useEffect} from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styles from './profile.module.css'
import clsx from "clsx";
import {getCookie} from "../../utils/cookies";
import {getProfile, postLogout} from "../../services/actions/auth";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshToken = getCookie('burgerRefreshToken')
  const {accessToken} = useSelector(store => store.auth);

  useEffect(() => {
    if (!refreshToken) {
      navigate('/login');
    }
    dispatch(getProfile(accessToken))

  }, [accessToken])
  const choosingStyles = ({isActive}) =>
    isActive ?
      clsx(styles.link, 'text', 'text_type_main-medium', styles.link_active)
      :
      clsx(styles.link, 'text', 'text_type_main-medium');
  return (
    <main className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <NavLink to={"/profile"}
                     className={choosingStyles}
                     end>
              Профиль
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to={"orders"}
                     className={choosingStyles}>
              История заказов
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to={'/'}
                     className={clsx(styles.link, 'text', 'text_type_main-medium')}
                     onClick={(e) => {
                       e.preventDefault();
                       dispatch(postLogout())
                     }}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={clsx(styles.desc, 'text', 'text_type_main-default', 'text_color_inactive', 'pt-20')}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet/>
    </main>
  );
};

export default Profile;
