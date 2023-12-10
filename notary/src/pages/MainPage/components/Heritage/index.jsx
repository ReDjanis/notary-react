import React from 'react';
import styled from './index.module.scss';
import { ReactComponent as IconMark } from './svg/icon-exclamation-mark.svg';

function Heritage() {
    return (
        <div className={styled.heritage}>

            <div className={styled.heritage__wrapper}>

                <div className={styled.heritage__title}>
                    <h3>
                        Наследство
                    </h3>
                </div>

                <div className={styled.heritage__services}>
                    <ul>
                        <li>
                            Открытие наследственного дела и выдача свидетельства о праве на наследство
                        </li>
                        <li>
                            Удостоверение соглашения о разделе наследственного имущества
                        </li>
                        <li>
                            Учреждение доверительного управления наследственным имуществом
                        </li>
                    </ul>
                </div>

                <div className={styled.heritage__subtitle}>
                    <div className={styled.heritage__icon}>
                        <IconMark />
                    </div>

                    <h4>
                        Что важно помнить
                    </h4>

                    <div className={styled.heritage__icon}>
                        <IconMark />
                    </div>

                </div>

                <div className={styled.heritage__important}>
                    <ul>
                        <li >
                        Обратиться в нотариальную контору за оформлением наследственных прав необходимо в течение 6 (шести) месяцев со дня смерти наследодателя.
                        </li>
                    </ul>
                </div>

                <div className={styled.heritage__documents}>
                    <h3>
                        ДОКУМЕНТЫ ДЛЯ ОФОРМЛЕНИЯ НАСЛЕДСТВА:
                    </h3>

                    <ol>
                        <li>
                            Документы, необходимые для подачи заявления о принятии наследства и открытия наследственного дела:
                            <ul>
                                <li>
                                    Свидетельство о смерти;
                                </li>
                                <li>
                                    Документы органов ЗАГС, подтверждающие родственные отношения наследников с наследодателем при наследовании по закону (Свидетельства о браке, о рождении и т.д., справка о регистрации брака + Свидетельство о расторжении брака и т.д.);
                                </li>
                                <li>
                                    Завещание (если оно есть) с отметкой нотариуса, удостоверившего завещание, о том, что оно не изменялось и не отменялось;
                                </li>
                                <li>
                                    Справка паспортного стола о постоянном проживании и регистрации умершего на день смерти (совместно с кем) – получается в Центре государственных услуг «Мои документы» по последнему месту жительства умершего;
                                </li>
                                <li>
                                    Выписка из домовой книги с записью данных об умершем и совместном проживании с ним членов его семьи на день открытия наследства из паспортного стола (не путать с Единым жилищным документом!) – получается В Центре государственных услуг «Мои документы» по последнему месту жительства умершего;
                                </li>
                                <li>
                                    Паспорт наследника.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Документы на наследственное имущество:

                            <ul className={styled.heritage__list}>
                                <li>
                                    <h4>
                                        Квартира:
                                    </h4>
                                    Правоустанавливающие документы, в зависимости от основания приобретения права собственности, (+ ксерокопия):
                                    <ul>
                                        <li>
                                            договор передачи,
                                        </li>
                                        <li>
                                            свидетельство о собственности,
                                        </li>
                                        <li>
                                            cвидетельство о государственной регистрации права собственности,
                                        </li>
                                        <li>
                                            договор купли-продажи, дарения, мены, ренты,
                                        </li>
                                        <li>
                                            cвидетельство о праве на наследство и т.п.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>
                                        Земельный участок:
                                    </h4>
                                    Правоустанавливающие документы на земельный участок, в зависимости от основания приобретения права собственности, (+ ксерокопия):
                                    <ul>
                                        <li>
                                            свидетельство о собственности
                                        </li>
                                        <li>
                                            постановление Администрации о выделении земельного участка,
                                        </li>
                                        <li>
                                            договор купли-продажи, дарения, мены и т.п.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>
                                        Строения на земельном участке:
                                    </h4>
                                    Правоустанавливающие документы,в зависимости от основания приобретения права собственности,(+ ксерокопия):
                                    <ul>
                                        <li>
                                            договор купли-продажи, дарения, мены,
                                        </li>
                                        <li>
                                            свидетельство о государственной регистрации права собственности,
                                        </li>
                                        <li>
                                            свидетельство о праве на наследство и т.п.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>
                                        Транспортное средство:
                                    </h4>
                                    Регистрационные документы (+ ксерокопия)
                                    <ul>
                                        <li>
                                            ПТС,
                                        </li>
                                        <li>
                                            свидетельство о регистрации ТС,
                                        </li>
                                        <li>
                                            отчет (Заключение) о рыночной стоимости транспортного средства на дату смерти наследодателя (Федеральный центр судебной экспертизы при Министерстве юстиции РФ (Ленинский пр-т, д. 156 или любая оценочная лицензированная организация).
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>
                                        Акции:
                                    </h4>
                                    <ul>
                                        <li>
                                            наименование Акционерного общества и наименование реестродержателя,
                                        </li>
                                        <li>
                                            отчет (Заключение) о рыночной стоимости акций на дату смерти наследодателя.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>
                                        Вклады в банках:
                                    </h4>
                                    Сведения о банке (банках), в которых у наследодателя были счета (для Сбербанка – желательно сберкнижки или договоры).
                                </li>
                            </ul>
                        </li>
                    </ol>

                </div>
            </div>

        </div>
    );
}

export default Heritage;