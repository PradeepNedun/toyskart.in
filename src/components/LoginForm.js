import React from "react";
import { Redirect } from "react-router-dom";
import { ProductConsumer } from "../context";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otp: ""
    };
  }

  render() {
    const { mobile, otp } = this.state;
    return (
      <ProductConsumer>
        {value => {
          if (value.isloggedIn) {
            return <Redirect to="/list" />;
          }
          return (
            <form onSubmit={this.handleSubmit(value.setLogInStatus, value.setCookie)} 
            style={{
              position: 'absolute',
              top: '25%',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          >
            <label htmlFor="email">Mobile or Email</label>
            <input
              name="mobile"
              type="text"
              placeholder="Enter your Mobile number or Email"
              value={mobile}
              onChange={this.handleChange}
            />
            <label htmlFor="email">OTP</label>
            <input
              name="otp"
              type="text"
              placeholder="Enter your OTP"
              value={otp}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">Login</button>
              <button type="button" style={{ marginLeft: 10 }}>Send OTP</button>
            </div>
          </form>
          )
        }}
    </ProductConsumer>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (fn, setCookie) => async event => {
    event.preventDefault();
    const { mobile, otp } = this.state;
    //logic magic
    if (mobile === "A" && otp === "B") {
      fn(true);
      setCookie('uuid', true , 1);
    } else {
      fn(false);
    }
    const obj = JSON.stringify({Param3:"Value3"});
    const res = await fetch(`https://api.msg91.com/api/v5/otp?authkey=285417AUxhbQBNj5d2d9a0c&template_id=1&extra_param=%7B%22Param1%22%3A%22Value1%22%2C%20%22Param2%22%3A%22Value2%22%2C%20%22Param3%22%3A%20%22Value3%22%7D&mobile=919003178800`);
    console.log(res);
  }
}

export default LoginForm;
