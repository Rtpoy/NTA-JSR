import './App.css';
import {Route, Switch} from 'react-router-dom'
import ProductsPage from './pages/ProductsPages';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPages'
import Header from './components/Header/Header'
function App() {

  useEffect(() => {
    setProducts(data);
      if(JSON.parse(localStorage.getItem("in cart"))) {
        setInCart(JSON.parse(localStorage.getItem("in cart")))
      }
   }, []);

  return (
    <div className="App">
      <Header />
       <Switch>
        <Route path="/" exact>
          <ProductsPage/>
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
