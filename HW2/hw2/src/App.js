import { useState, useEffect } from 'react';
import './App.css';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import Products from "./public/Products.json"
function App() {
  const [products, setProducts] = useState(Products);
  const [favorites, setFavorites] = useState([]);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(inCart))
  }, [inCart])
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
  const isInclude  = (fav) =>{
    return favorites.includes(fav) 
  }
  return (
    <div className="App">
        <ProductList>
          {products.map((product) => <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} 
          color={product.color}  image={product.image} toggleFav={toggleFav} isInclude={isInclude} addToCart={addToCart}/>)}
        </ProductList>
    </div>
  );
}

export default App;
