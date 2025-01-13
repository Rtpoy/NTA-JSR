import React, { useEffect, useState, useContext } from "react";
import ProductList from '../components/ProductList/ProductList'
import ProductItem from '../components/ProductItem/ProductItem'
import { ProductsContext } from "../context/context";
import { useDispatch}  from 'react-redux';
const FavoritesPage = () => {
    const  [products, setProducts] = useState([])
    const context = useContext(ProductsContext)
    useEffect ( () => {setProducts(context.products.filter((item) => context.favorites.includes(item.id)))}, [context]
    )    

    const dispatch = useDispatch()
            return (
                <div>
                <ProductList>
                  {products.map((product) => <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} 
                  color={product.color}  image={product.image}  />)}
                </ProductList>
                </div>
            );
        };
export default FavoritesPage;