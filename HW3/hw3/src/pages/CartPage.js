import React, { useEffect, useState, useContext } from "react";
import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem';
import { ProductsContext } from "../context/context";
const CartPage = () => {
    const  [product, setProduct] = useState([])
    const context = useContext(ProductsContext)
    useEffect ( () => {setProduct(context.products.filter((item) => context.inCart.includes(item.id)))}, [context]
        
    )    
            return (
                <div>
                <ProductList>
                  {product.map((product) => <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} 
                  color={product.color}  image={product.image} isCartPage={true}
                   />)}
                </ProductList>
                </div>
            );
        };
export default CartPage;