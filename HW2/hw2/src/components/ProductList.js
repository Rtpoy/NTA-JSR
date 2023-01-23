import React from "react";
import styles from "./ProductList.module.scss"
const  ProductList = ({children}) => {
    return (
        <div className={styles.container}>
            <ul>
            {children}
            </ul>
        </div>
    )
}

 
export default ProductList;