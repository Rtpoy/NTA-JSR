import React, { useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({closeModal}) => {
    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
                <p>Товар добавлен в корзину</p>
            </div>
        </div>
    )
}
export default Modal;