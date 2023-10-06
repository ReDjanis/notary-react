import React from 'react';
import styled from './index.module.scss';
import { NavLink } from 'react-router-dom';

function Header() {

    const setActive = ({ isActive }) => isActive ? styled.header__active : styled.header__pending;

    return (
        <div className={styled.header}>
            <div className={styled.header__info}>

                <div className={styled.header__img}>
                    <div className={styled.header__wrp}>
                        <img src="/images/icon-logo.png" alt="иконка сайта" />
                    </div>
                </div>


                <div className={styled.header__title}>
                    <h1>
                        Мокробородова Елена Генриховна
                    </h1>

                    <h3>
                        Сайт нотариуса города Москвы
                    </h3>
                </div>
            </div>

            <div className={styled.header__buttons}>

                    <NavLink
                        to='/'
                        className={setActive}
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        to='/contacts'
                        className={setActive}
                    >
                        Контакты
                    </NavLink>
                    
            </div>
        </div>
    );
}

export default Header;
