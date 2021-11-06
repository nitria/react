import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Details from "./Details";
import Cart from "./cart/Cart";
import Default from "./Default";
import Modal from "./Modal";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
