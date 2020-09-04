import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import { ProductConsumer } from "../context";
import { Button } from "reactstrap";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const isloggedIn = value.isloggedIn;
          return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            {/*
              https://www.iconfinder.com/icons/1243689/call_phone_icon
              Creative Commons (Attribution 3.0 Unported);
              https://www.iconfinder.com/Makoto_msk 
          */}
            <Link to="/">
              <img src={logo} className="navbar-brand" alt="logo" style={{ height: '60px', width: '100px' }}/>
            </Link>
            <ul className="navbar-nav align-items-center">
              <Link to="/list" className="nav-link ml-5" style={{ color: "#FFF" }}>
                Products
              </Link>
            </ul>
            {/* Login */}
            {
              !isloggedIn && (
                <ul className="navbar-nav align-items-center">
                  <Link to="/login" className="nav-link ml-5">
                    Login
                  </Link>
                </ul>
              )
            }
            {
              isloggedIn && (
                <>
                  <Link to="/cart" className="ml-auto">
                    <Button color="warning" style={{ height: "40px", width: "120px", fontSize: "14px" }}>
                      <span className="mr-2">
                        <i className="fas fa-cart-plus" aria-hidden="true"></i>
                      </span>
                      <span>My Cart | {" "} {value.totalProductsInCart()}</span>
                    </Button>
                  </Link>
                  <Link onClick={() => value.eraseCookie()} className="nav-link" style={{ color: "#FFF" }} to="/">
                    LogOut
                  </Link>
                </>
              )
            }
          </nav>
          )
        }}
      </ProductConsumer>
    );
  }
}
