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
      </>
    );
  }
}
