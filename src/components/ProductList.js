import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Product /> */}
        <div className="py-5">
          <div className="container">
            {/* <Title name="our" title="products" /> */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} onCartAdd={value.addToCart} isLoggedIn={value.isloggedIn} inCart={value.itemsInCart[product.id]}/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
