import React from 'react';
import {Logo, BurgerIcon, ProfileIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import app_header from './app-header.module.css';
import clsx from "clsx";
import {NavLink} from "react-router-dom";


const AppHeader = () => {
  const choosingStyles = ({isActive}) =>
    isActive ?
      clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button, app_header.button_active)
      :
      clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button);

  return (<header className={app_header.header}>
    <div className={clsx(app_header.content, 'pt-4', 'pb-4')}>
      <nav className={clsx(app_header.nav_wrapper)}>
        <NavLink  to={'/'} className={choosingStyles}>
          <BurgerIcon type="primary"/>
          <span className={clsx('pl-2', 'text', 'text_type_main-default')}>
            Конструктор
          </span>
        </NavLink>
        <NavLink to={'/feed'} className={choosingStyles}>
          <ListIcon type="primary"/>
          <span className={clsx('pl-2', 'text', 'text_type_main-default')}>Лента заказов</span>
        </NavLink>
      </nav>
      <NavLink to={'/'} className={app_header.logo_wrapper}>
        <Logo/>
      </NavLink>
      <NavLink to={'/profile'} end className={choosingStyles}>
        <ProfileIcon type="primary"/>
        <span className={clsx('pl-2', 'text', 'text_type_main-default')}>Личный кабинет</span>
      </NavLink>
    </div>
  </header>);
};

export default AppHeader;
