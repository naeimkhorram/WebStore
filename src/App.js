import React from "react";
import "./index.css";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

//Components
import Store from "./components/Store";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./components/shared/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import ShopCart from './components/ShopCart'
import Navbar from "./components/shared/Navbar";


const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>      
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/Cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
    //By using ProductContextProvider we can render what we want in App component from ProductContextProvider component
  );
};

export default App;
