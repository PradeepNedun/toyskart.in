import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CheckoutForm from './cart/CheckoutForm';

export default class Cart extends Component {
  render() {
    return (
      <>
      <div>
        <CheckoutForm />
        {/* <ProductConsumer>
        {value => {
          console.log(value);
        return <h2>Hello from Cart</h2>
        }}

        </ProductConsumer> */}
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
      </>
    );
  }
}
