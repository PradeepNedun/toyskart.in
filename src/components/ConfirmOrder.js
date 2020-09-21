import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { getOrderId, removeOrderId } from './generateOrderId';

export default class ConfirmOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            orderId: getOrderId,
            sucess: "null"
        };
    }

    componentDidMount() {
      const formData = new FormData();
      const data = {
        appId: "30172e4b88352b8f19feebef127103",
        secretKey: "5538a8ff4944458b0a10b866ed11d8486c01e984",
        orderId: getOrderId(),
      };
      formData.append("appId", data.appId);
      formData.append("secretKey", data.secretKey);
      formData.append("orderId", data.orderId);
      fetch("https://test.cashfree.com/api/v1/order/info/status", {
        method: 'post',
        body: formData,
      })
      .then(res => res.json())
      .then(res => {
        console.log(res.txStatus);
        if(res.reason) {
          this.setState({
            sucess: "failure"
          });
          return;
        }
        this.setState({
          sucess: "sucess"
        })
        // this.setState({paymentLink: res.paymentLink})
      })
    }

    setFlag = value => {
        if (this.state.flag) return;
        value.eraseCookie("products", true);
        removeOrderId();
        this.setState({
            flag: true
        })
    }

  render() {
    return (
      <>
        <ProductConsumer>
            {value => {
                this.setFlag(value);
                if (this.state.sucess === "sucess") {
                  return (<div className="container" style={{ height: "100vh"}}>
                      <img src="img/sucess.png" width={200} height={200} alt="success" className="mt-4" style={{ display: "block", margin: "0 auto" }}/>
                      <h3 style={{ textAlign: "center" }}>Thanks for Shopping with us !!</h3>
                      <p style={{ textAlign: "center" }}>
                      <Link to="/list" style={{ textDecoration: "underline" }}>Shop more</Link>
                      </p>
                  </div>)
                }
                if (this.state.sucess === "failure") {
                  return (<div className="container" style={{ height: "100vh"}}>
                      <img src="img/error.png" width={200} height={200} alt="success" className="mt-4" style={{ display: "block", margin: "0 auto" }}/>
                      <h3 style={{ textAlign: "center" }}>oops !! Something went wrong !!</h3>
                      <p style={{ textAlign: "center" }}>
                      <Link to="/list" style={{ textDecoration: "underline" }}>Shop more</Link>
                      </p>
                  </div>)
                }
            }
        }
    </ProductConsumer>
    </>
    );
  }
}
