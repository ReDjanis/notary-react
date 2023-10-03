import React from 'react';
import styled from './index.module.scss';

function Header() {
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
                <button className={styled.header__btn}>
                    Главная
                </button>
                <button className={styled.header__btn}>
                    Контакты
                </button>
            </div>
        </div>
    );
}

export default Header;
