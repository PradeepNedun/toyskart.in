import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class ConfirmOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        };
    }
    setFlag = value => {
        if (this.state.flag) return;
        value.eraseCookie("products", true);
        this.setState({
            flag: true
        })
    }

  render() {
    return (
        <ProductConsumer>
            {value => {
                this.setFlag(value);
                return (<div className="container">
                    <img src="img/sucess.png" width={200} height={200} alt="success" className="mt-4" style={{ display: "block", margin: "0 auto" }}/>
                    <h3 style={{ textAlign: "center" }}>Thanks for Shopping with us !!</h3>
                    <p style={{ textAlign: "center" }}> 
                    <Link to="/list" style={{ textDecoration: "underline" }}>Shop more</Link>
                    </p>
                </div>)
            }
        }
    </ProductConsumer>
    );
  }
}
