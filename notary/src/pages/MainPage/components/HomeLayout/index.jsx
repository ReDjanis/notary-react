import React from 'react';
import styled from './index.module.scss';
import { ReactComponent as IconPhysical } from './svg/icon-physical.svg';
import { ReactComponent as IconJuridical } from './svg/icon-juridical.svg';
import { ReactComponent as IconHeritage } from './svg/icon-heritage.svg';
import { Link, useLocation } from 'react-router-dom';

function HomeLayout() {
    return (
        <div className={styled.homelayout}>

            <div className={styled.homelayout__title}>
                <h2>
                    Московская городская нотариальная палата
                </h2>

            </div>

            <div className={styled.homelayout__content}>

                <div className={styled.homelayout__actions}>

                    <h3>
                        Совершаемые нотариальные действия
                    </h3>

                    <div className={styled.homelayout__buttons}>
                        <Link to='/physical'>
                            <div className={styled.homelayout__icon}>
                                <IconPhysical />
                            </div>


                            <p className={styled.homelayout__text}>
                                Физическим лицам
                            </p>
                        </Link>

                        <Link to='/juridical'>

                            <div className={styled.homelayout__icon}>
                                <IconJuridical />
                            </div>


                            <p className={styled.homelayout__text}>
                                Юридическим лицам
                            </p>
                        </Link>

                        <Link to='/heritage'>

                            <div className={styled.homelayout__icon}>
                                <IconHeritage />
                            </div>


                            <p className={styled.homelayout__text}>
                                Наследство
                            </p>
                        </Link>
                    </div>


                </div>

                <div className={styled.homelayout__links}>

                    <h3>
                        Полезные ссылки
                    </h3>

                    <div className={styled.homelayout__items}>

                        <Link to="https://www.gosuslugi.ru/" target="_blank" className={styled.homelayout__link}>
                                <img src="/images/link-gosuslugi.png" alt="ссылка на сайт госуслуги" />
                        </Link>

                        <Link to="https://www.nalog.gov.ru/rn77/" target="_blank" className={styled.homelayout__link}>
                            <img src="/images/link-fns.jpg" alt="ссылка на сайт федеральной налоговой службы" />
                        </Link>

                        <Link to="https://rosreestr.gov.ru/" target="_blank" className={styled.homelayout__link}>
                            <img src="/images/link-rosreestr.jpg" alt="ссылка на сайт росреестра" />
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default HomeLayout;