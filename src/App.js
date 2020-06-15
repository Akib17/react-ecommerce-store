import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import ProductContextProvider from './context/productContext';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <ProductContextProvider>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/details/" component={ProductDetails}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    </ProductContextProvider>
  );
}

export default App;
