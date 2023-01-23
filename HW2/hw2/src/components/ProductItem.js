import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./ProductItem.module.scss";
import Modal from "./Modal";

const ProductItem = ({
  id,
  name,
  price,
  article,
  color,
  image,
  toggleFav,
  isInclude,
  addToCart
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isInclude(id));
  }, [isInclude, id]);

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
        <button onClick={() => { 
            setOpenModal(true)
            addToCart(id)
            return true
            }}>add to cart</button>
        <button
          className={styles.favBut}
          onClick={() => toggleFav(id)} style={{backgroundColor : isFav ? "yellow" : "white"}}
        ></button>
      </div>
      {openModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ProductItem;
