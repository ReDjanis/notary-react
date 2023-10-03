import React from 'react';
import styled from './index.module.scss';

function Footer() {
    return (
        <div className={styled.footer}>
            <div>
                <a href="" className={styled.footer__link}>
                    Главная
                </a>
                <a href="" className={styled.footer__link}>
                    Контакты
                </a>
            </div>

            <div className={styled.footer__info}>
                Copyright © 2023 Мокробородова Елена Генриховна
            </div>
        </div>
    );
}

export default Footer;