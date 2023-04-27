import React, {FC, useEffect, useState} from 'react';
import {NavLink, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hooks";
import styles from './profile.module.css'
import clsx from "clsx";
import {getCookie} from "../../utils/cookies";
import {getProfile, postLogout} from "../../services/actions/auth";
import ProfileOrderDetails from "../../components/profile-order-details/ProfileOrderDetails";
import {getIngredientsList, PRIVATE_FEED_SET_CURRENT_ORDER} from "../../services/actions";
import {WS_PRIVATE_FEED_CONNECTION_CLOSED, WS_PRIVATE_FEED_CONNECTION_START} from "../../services/action-types";
import PrivateOrderDetails from "../../components/private-order-details/PrivateOrderDetails";

const Profile:FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const refreshToken = getCookie('burgerRefreshToken');
  const accessToken = getCookie('burgerAccessToken');
  const {logoutIsSuccess} = useSelector(store => store.auth);
  const [isOrderDetailsActive, setOrderDetailsActive] = useState<boolean>(false);
  const {ingredientsList} = useSelector(store => store.list);
  const {ordersPr} = useSelector(store => store.privateFeed);


  useEffect(() => {
    if (!refreshToken || refreshToken === 'null') {
      navigate('/login');
    }
    dispatch(getProfile(accessToken))

  }, [accessToken])
  useEffect(() => {
    if (logoutIsSuccess) {
      navigate('/login')
    }
  }, [logoutIsSuccess])
  useEffect(() => {
    if (location.state) {
      if (location.state.PRIVATE_FEED_ORDER_STATE===true) {
        setOrderDetailsActive(true);
      }
    }
  }, [])
/*
  useEffect(() => {
    if (location.state) {
      console.log(location.state)
      if (location.state.NONMODAL_PRIVATE_FEED_ORDER_STATE) {
        console.log(location.state.NONMODAL_PRIVATE_FEED_ORDER_STATE)
        var order = ordersPr.filter((item) => {
          return item._id === location.state.NONMODAL_PRIVATE_FEED_ORDER_STATE;
        })[0];
        var ingList = order.ingredients.map((item, index) => {
          return ingredientsList.find((el) => {
            return el._id === item
          });
        })
        var orderSum = ingList.reduce((prev, curr) => curr.type === 'bun' ? prev + curr.price * 2 : prev + curr.price, 0);

        console.log(order);
        console.log(ingList);
        console.log(orderSum);
        dispatch({
          type: PRIVATE_FEED_SET_CURRENT_ORDER,
          selectedOrder: order,
          selectedList: ingList,
          selectedTotal: orderSum,
        })
        setOrderDetailsActive(true);
      }
    }
  }, [location.state])
*/

  const choosingStyles = ({isActive}:{isActive: boolean}):string =>
    isActive ?
      clsx(styles.link, 'text', 'text_type_main-medium', styles.link_active)
      :
      clsx(styles.link, 'text', 'text_type_main-medium');
  return (
    <main className={styles.wrapper}>
      {isOrderDetailsActive ?
        <div className={styles.detailsWrapper}>
          <PrivateOrderDetails/>
        </div>
        :
        <>
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
        </>
      }
    </main>
  );
};

export default Profile;
