import React, { useState, useContext } from "react";
import { ProductsContext } from "../context/context";
import styles from "./Modal.module.scss";

const Modal = ({closeModal, isCartPage, id}) => {
    const context = useContext(ProductsContext)
    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
            {!isCartPage &&
            <h2>Товар додано в корзину</h2>
            }
            {isCartPage &&
            <div>
            <h2>Ви хочете видалити товар?</h2>
            <button onClick={() =>  context.deleteFromCart(id)}>Видалити</button>
            </div>
            } 
            </div>
        </div>  
    )
}
export default Modal;