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
          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <span class="text-justify">
                  LittleOnesKart.com <i>Educational products for your kids </i>

                  is an initiative to provide Eco Friendly, Lead Free, Non Toxic, Resonsible forestry Certified prducts to your family.</span>
                </div>
              </div>
              <hr />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <span class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
               <a href="#">{" "}LittleOnesKart</a>.
                  </span>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
      </footer>
      </div>
    </>
    );
  }
}

export default App;
