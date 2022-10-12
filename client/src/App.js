import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { useSelector } from "react-redux";
import Wishlist from "./pages/Wishlist";

function App() {
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const isNewRegistered = useSelector((state) => state.user.isNewRegistered);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/register">
            {isNewRegistered && <Login />}
            {loggedInUser ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">
            {loggedInUser ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
