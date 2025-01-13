import React, { useEffect, useState, useContext } from "react";
import styles from "./ProductItem.module.scss";
import Modal from '../Modal/Modal'
import { ProductsContext } from '../../context/context'

const ProductItem = ({ id, name, price, color, image, isCartPage }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const context = useContext(ProductsContext);

  useEffect(() => {
    setIsFav(context.favorites.includes(id));
  }, [context, id]);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.container__items}>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <h4>{color}</h4>
        {!isCartPage && (
          <div>
            <button
              onClick={() => {
                setOpenModal(true);
                context.addToCart(id);
                return true;
              }}
            >
              add to cart
            </button>
            <button
              className={styles.favBut}
              onClick={() => context.toggleFav(id)}
              style={{ backgroundColor: isFav ? "yellow" : "white" }}
            ></button>
          </div>
        )}
        {isCartPage && (
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            X
          </button>
        )}
      </div>
      {openModal && <Modal closeModal={closeModal} isCartPage={isCartPage} id={id} />}

    </div>
  );
};

export default ProductItem;
