import styled from './index.module.scss';
import { ReactComponent as IconLocation } from './svg/icon-location.svg';
import { ReactComponent as IconUnderground } from './svg/icon-underground.svg';
import { ReactComponent as IconPhone } from './svg/icon-phone.svg';
import { ReactComponent as IconMail } from './svg/icon-email.svg';
import { ReactComponent as IconInfo } from './svg/icon-info.svg';
import { Link } from 'react-router-dom';
import Maps from '../../../../components/Map';


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
                    <div className={styled.contacts__items}>

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
                                    <Link to="tel:84997850345">
                                        8 (499) 785-03-45
                                    </Link>
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

                    <Maps />
                    
                </div>
            </div>

        </div>
    );
}

export default Contacts;