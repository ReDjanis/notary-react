import React from 'react';
import styled from "./index.module.scss";
import Map from "../Map"


function Modal({ active, setActive }) {
    return (
        <div className={active ? `${styled.modal} ${styled.modal__active}` : `${styled.modal}`} onClick={() => setActive(false)}>
                <Map width={'inherit'}/>
        </div>
    );
};

export default Modal;