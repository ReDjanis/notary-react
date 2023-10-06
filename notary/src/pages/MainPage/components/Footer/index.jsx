import React from 'react';
import styled from './index.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as IconLocation } from './svg/icon-location.svg';
import { ReactComponent as IconPhone } from './svg/icon-phone.svg';

function Footer() {

    const setActive = ({ isActive }) => isActive ? styled.footer__active : styled.footer__pending;

    return (
        <div className={styled.footer}>
            <div className={styled.footer__nav}>
                <nav>
                    <NavLink
                        to='/'
                        className={setActive}
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        to='/physical'
                        className={setActive}
                    >
                        Физ.лицам
                    </NavLink>

                    <NavLink
                        to='/juridical'
                        className={setActive}
                    >
                        Юр.лицам
                    </NavLink>

                    <NavLink
                        to='/heritage'
                        className={setActive}
                    >
                        Наследство
                    </NavLink>

                    <NavLink
                        to='/contacts'
                        className={setActive}
                    >
                        Контакты
                    </NavLink>
                </nav>

                <Link to='tel:84997850345' className={styled.footer__info}>
                    <div className={styled.footer__icon}>
                        <IconPhone />
                    </div>
                    8 (499) 785-03-45
                </Link>

                <div className={styled.footer__info}>
                    <div className={styled.footer__icon}>
                        <IconLocation />
                    </div>

                    Москва, ул. Щербаковская, д. 35
                </div>

            </div>

            <div className={styled.footer__rights}>
                Copyright © 2023 Мокробородова Елена Генриховна
            </div>
        </div>
    );
}

export default Footer;