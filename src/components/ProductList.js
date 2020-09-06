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
        <footer style={{ color: "#fff"}}>
        <div style={{ height: "100%", padding: "0.5rem"}}>
          <span style={{ fontSize: "12px", float: "right"}}>Sainya Technologies Pvt Ltd</span>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <span>For Order Status/ Queries: Whatsapp or call 7708617009</span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
