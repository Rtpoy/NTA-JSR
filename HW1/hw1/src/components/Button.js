import React from 'react';
import styles from "./Button.module.scss";

const Button = ({text, backColor, onClick}) => {
    return (
        <button  className={styles.button}  onClick={onClick} style={{backgroundColor:backColor}}>{text}</button>
    );
};

export default Button;