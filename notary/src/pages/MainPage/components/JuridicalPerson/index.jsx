import React from 'react';
import styled from './index.module.scss';
import { ReactComponent as IconMark } from './svg/icon-exclamation-mark.svg';

function JuridicalPerson() {
    return (
        <div className={styled.juridical}>
            <div className={styled.juridical__wrapper}>

                <div className={styled.juridical__title}>
                    <h3>
                        Юридическим лицам
                    </h3>
                </div>

                <div className={styled.juridical__services}>
                    <ul>
                        <li>
                            Представление документов на государственную регистрацию юридических лиц и индивидуальных предпринимателей в ЕГРЮЛ в электронной форме
                        </li>
                        <li>
                            Свидетельствование верности копий документов
                        </li>
                        <li>
                            Свидетельствование подлинности подписи на заявлениях, банковских карточках и прочих документах, в том числе на заявлениях, предоставляемых на государственную регистрацию в Едином государственном реестре юридических лиц
                        </li>
                        <li>
                            Удостоверение доверенностей
                        </li>
                        <li>
                            Удостоверение договоров (отчуждения и залога имущества, долей в Уставном капитале Обществ с ограниченной ответственностью и др.)
                        </li>
                        <li>
                            Удостоверение односторонних сделок (оферты, в том числе безотзывной, акцепта, согласий, отказов и др.)
                        </li>
                        <li>
                            Удостоверение равнозначности документов
                        </li>
                        <li>
                            Удостоверение решения органов управления юридическим лицом
                        </li>
                        <li>
                            Другие действия, предусмотренные Основами законодательства РФ о нотариате
                        </li>

                    </ul>
                </div>

                <div className={styled.juridical__subtitle}>
                    <div className={styled.juridical__icon}>
                        <IconMark />
                    </div>

                    <h4>
                        Что важно помнить
                    </h4>

                    <div className={styled.juridical__icon}>
                        <IconMark />
                    </div>

                </div>

                <div className={styled.juridical__important}>
                    <ul>
                        <li >
                            Представитель юридического лица (как правило руководитель) присутствует на приёме лично, предоставляет свой ПАСПОРТ, а также подлинники документов юридического лица:
                            <ul>
                                <li>
                                    Устав (с изменениями, если таковые были), учредительный договор (с изменениями, если таковые были), протоколы или решения с момента создания;
                                </li>
                                <li>
                                    Свидетельства о регистрации юридического лица в ЕГРЮЛ при создании, внесении изменений ГРН;
                                </li>
                                <li>
                                    Свидетельство о присвоении ИНН;
                                </li>
                                <li>
                                    Решения (Протоколы) об избрании (назначении) руководителя юр. лица, о подтверждении полномочий – при продлении срока избрания (назначения), приказ о вступлении в должность.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={styled.juridical__info}>
                    Перед личной явкой руководителя юридического лица на приём к нотариусу, с целью экономии времени ожидания, желательно позвонить по указанному телефону нотариальной конторы, записаться на приём и выяснить, что нужно для оформления того или иного действия
                </div>
            </div>
        </div>
    );
}

export default JuridicalPerson;