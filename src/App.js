import React, { Component, Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/product-detail";
// import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import "./css/style.css";
import Landingpage from "./components/Landingpge";
import ConfirmOrder from "./components/ConfirmOrder";

class App extends Component {

  render() {
    return(
    <>
      <div className="spacer">
        <Navbar />

        <Switch>
          <Route exact path="/list" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginForm} />
          <Route path="/confirm" component={ConfirmOrder} />
          <Route path="/" component={Landingpage} />
          <Route component={Default} />
        </Switch>
        <div class="push"></div>
      </div>
    </>
    );
  }
}

export default App;
