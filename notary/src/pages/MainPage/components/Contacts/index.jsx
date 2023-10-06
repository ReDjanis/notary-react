import React from 'react';
import styled from './index.module.scss';
import { ReactComponent as IconLocation } from './svg/icon-location.svg';
import { ReactComponent as IconUnderground } from './svg/icon-underground.svg';
import { ReactComponent as IconPhone } from './svg/icon-phone.svg';
import { ReactComponent as IconMail } from './svg/icon-email.svg';
import { ReactComponent as IconInfo } from './svg/icon-info.svg';


function Contacts() {
    return (
        <div className={styled.contacts}>
            <div className={styled.contacts__wrapper}>

                <div className={styled.contacts__title}>
                    <h3>
                        Контакты
                    </h3>
                </div>

                <div className={styled.contacts__content}>
                    <div className={styled.contacts__info}>

                        <div className={styled.contacts__item}>

                            <div className={styled.contacts__icon}>
                                <IconLocation />
                            </div>

                            <div>
                                <p className={styled.contacts__text_bold}>
                                    Адрес:
                                </p>
                                <p className={styled.contacts__text}>
                                    105318, Москва, ул. Щербаковская, д. 35
                                </p>
                            </div>

                        </div>
                        <div className={styled.contacts__item}>

                            <div className={styled.contacts__icon}>
                                <IconUnderground />
                            </div>

                            <div>
                                <p className={styled.contacts__text_bold}>
                                    Ближайшие станции:
                                </p>
                                <p className={styled.contacts__text}>
                                    Семёновская, Партизанская (МЦК Измайлово)
                                </p>
                            </div>

                        </div>
                        <div className={styled.contacts__item}>

                            <div className={styled.contacts__icon}>
                                <IconPhone />
                            </div>

                            <div>
                                <p className={styled.contacts__text_bold}>
                                    Телефон:
                                </p>
                                <p className={styled.contacts__text}>
                                    8 (499) 785-03-45
                                </p>
                            </div>

                        </div>
                        <div className={styled.contacts__item}>

                            <div className={styled.contacts__icon}>
                                <IconMail />
                            </div>

                            <div>
                                <p className={styled.contacts__text_bold}>
                                    E-mail:
                                </p>
                                <p className={styled.contacts__text}>
                                    02200355@mail.ru
                                </p>
                            </div>

                        </div>
                        <div className={styled.contacts__item}>

                            <div className={styled.contacts__icon}>
                                <IconInfo />
                            </div>

                            <div>
                                <p className={styled.contacts__text_bold}>
                                    Режим работы:
                                </p>
                                <p className={styled.contacts__text}>
                                    Пн-Чт | 10:00 - 18:00 | перерыв 13:00 - 14:00
                                    <br />
                                    Пт-Сб | 10:00 - 14:00 | без перерыва
                                    <br />
                                    Вс - выходной
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={styled.contacts__map}>
                        {/* <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A005f359698ac1baabdedbbf2d177110c53508d70d1c3c64911512273c36ba50d&amp;width=690&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script> */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;