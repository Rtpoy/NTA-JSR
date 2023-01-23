import React, { useState } from "react";
import styles from "./Modal.module.scss" ;

const Modal = ({text, header, closeModal, closeButton}) => {
    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
                <header>{header}
                 {closeButton && <button onClick={closeModal}>X</button>}
                </header>
                <p>{text}</p>
                <div className={styles.buttonContainer}>
                <button>Ok</button>
                <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;