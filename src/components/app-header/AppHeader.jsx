import React from 'react';
import {Logo, BurgerIcon, ProfileIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import app_header from './app-header.module.css';
import clsx from "clsx";
import {NavLink} from "react-router-dom";


const AppHeader = () => {
  return (<header className={app_header.header}>
    <div className={clsx(app_header.content, 'pt-4', 'pb-4')}>
      <nav className={clsx(app_header.nav_wrapper)}>
        <NavLink to={'/'} className={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)}>
          <BurgerIcon type="primary"/>
          <span className={clsx('pl-2', 'text', 'text_type_main-default', app_header.button_text)}>
            Конструктор
          </span>
        </NavLink>
        <NavLink to={'/'} className={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)}>
          <ListIcon type="secondary"/>
          <span className={clsx('pl-2', 'text', 'text_type_main-default', 'text_color_inactive')}>Лента заказов</span>
        </NavLink>
      </nav>
      <div className={app_header.logo_wrapper}>
        <Logo/>
      </div>
      <NavLink to={'/profile'} className={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)}>
        <ProfileIcon type="primary"/>
        <span className={clsx('pl-2', 'text', 'text_type_main-default')}>Личный кабинет</span>
      </NavLink>
    </div>
  </header>);
};

export default AppHeader;
