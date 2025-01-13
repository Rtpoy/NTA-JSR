import { createContext, useState, useEffect } from "react";
import data from '../public/product.json'

export const ProductsContext = createContext({
    favorites: [],
    inCart: [],
    products: [], 
    toggleFav: (fav) => {},
    addToCart: (id) => {},
    deleteFromCart: (prod) =>{}
})

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState(data);
    const [favorites, setFavorites] = useState([]);
    const [inCart, setInCart] = useState([]);
   
  //  useEffect(() => {
  //   setProducts(data);
  //     if(JSON.parse(localStorage.getItem("in cart"))) {
  //       setInCart(JSON.parse(localStorage.getItem("in cart")))
  //     }

  //  }, []);
   
      const addToCart = (product) =>{
        setInCart((prev) =>{
          return prev.concat(product)
        })
      }
    
      const add = (product) => {
        setFavorites((prev) => {
          return prev.concat(product)
        })
      }
      const remove = (fav) => {
        setFavorites((prev) => {
          return prev.filter((item) => item !== fav)
        })
      }
      const toggleFav = (fav) =>{
        return favorites.includes(fav) ? remove(fav) :add(fav);
      }
      const  deleteFromCart = product => setInCart(prev => prev.filter((item) => item !== product));
    return (
        <ProductsContext.Provider value={{favorites, inCart, products, toggleFav, addToCart, deleteFromCart}}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContextProvider;