import './App.css';
import {Route, Switch} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPages';
import Header from './components/Header'
function App() {

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
