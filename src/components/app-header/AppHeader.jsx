import React from 'react';
import {Logo, Button, BurgerIcon, ProfileIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import app_header from './app-header.module.css';
import clsx from "clsx";


const AppHeader = () => {
    return (
        <header className={app_header.header}>
            <div className={clsx(app_header.content, 'pt-4', 'pb-4')}>
                <nav className={clsx(app_header.nav_wrapper)}>
                    <Button extraClass={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)} htmlType="button" type="secondary" size="medium">
                        <BurgerIcon type="primary"/>
                        <span className={clsx('pl-2','text', 'text_type_main-default', app_header.button_text)} >Конструктор</span>
                    </Button>
                    <Button extraClass={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)} htmlType="button" type="secondary" size="medium" disabled={true}>
                        <ListIcon type="secondary"/>
                        <span className={'pl-2'}>Лента заказов</span>
                    </Button>
                </nav>
                <div className={app_header.logo_wrapper}>
                    <Logo/>
                </div>
                <Button extraClass={clsx('pl-5', 'pr-5', 'pt-4', 'pb-4', app_header.button)} htmlType="button" type="secondary" size="medium" disabled={true}>
                    <ProfileIcon type="secondary"/>
                    <span className={'pl-2'}>Личный кабинет</span>
                </Button>
            </div>
        </header>
    );
};

export default AppHeader;