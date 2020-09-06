import React from "react";
import { Col, Row, Form, FormGroup, Input, Label, Button, Table } from "reactstrap";
import Toggle from '../Toggle';
import CountryOptions from './input_options/countryOptions';
import StateOptions from './input_options/stateOptions';
import { ProductConsumer } from '../../../context';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getOrderId, removeOrderId } from '../../generateOrderId';

class FormContactInfo extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
		console.log(this.props);
		this.state= {
			customer: {},
			qty: 1
		}
		removeOrderId();
	}
	onChange = (e) => {
		let prop = {};
		prop[e.target.name] = e.target.value;
		let customer1 = Object.assign({}, this.state.customer, prop);
		this.setState({
			customer: customer1
		});
	}

	onSubmit = e => {
		const { co_phone, co_email, co_first_name } = this.state.customer;
		const formData = new FormData();
		const data = {
		  appId: "30172e4b88352b8f19feebef127103",
		  secretKey: "5538a8ff4944458b0a10b866ed11d8486c01e984",
		  orderId: getOrderId(co_phone),
		  orderAmount: localStorage.getItem("totalPrice"),
		  orderCurrency: "INR",
		  orderNote: "Order for "+ co_email,
		  customerEmail: co_email,
		  customerName: co_first_name,
		  customerPhone: co_phone,
		  returnUrl: "https://toyskart.herokuapp.com/confirm",
		};
		console.log(data.orderId)
		formData.append("appId", data.appId);
		formData.append("secretKey", data.secretKey);
		formData.append("orderId", data.orderId);
		formData.append("orderAmount", data.orderAmount);
		formData.append("orderCurrency", data.orderCurrency);
		formData.append("orderNote", data.orderNote);
		formData.append("customerEmail", data.customerEmail);
		formData.append("customerName", data.customerName);
		formData.append("customerPhone", data.customerPhone);
		formData.append("returnUrl", data.returnUrl);

		fetch("https://test.cashfree.com/api/v1/order/create", {
		  method: 'post',
		  body: formData
		})
		.then(response => response.json())
		.then(res => {
		  console.log(res.paymentLink);
		  window.location.href = res.paymentLink;
		  // this.setState({paymentLink: res.paymentLink})
		})
		e.preventDefault();
	}

	qtyChange = (e, addToCart, itemId) => {
		addToCart({ id: +itemId, qty: +e.target.value });
	}

	remove = (addToCart, itemId) => {
		addToCart({ id: +itemId, qty: 0 });
	}

  	render() {
    	return (
		<Form className="container-fluid contact-info-container" onSubmit={this.onSubmit} type="post">
			<Toggle>
				{({ on, off, toggle }) => (
					<div className="toggle-container mt-2">
						{off && <div>
						<ProductConsumer>
                          {
                            values => {
							  const itemIds = Object.keys(values.itemsInCart);
							  if (!itemIds.length) {
								  return <Link style={{ color: '#007bff!important', marginTop: "8px", textDecoration: "underline", textAlign: "center"}} to="/list" className="mt-2">
									  <img src="img/empty_cart.png" width={200} height={200} alt="empty cart" style={{ display: "block", margin:"auto" }}/>
									  <h6 className="mt-2 ml-2">Go To Shopping</h6>
									</Link>
							  }

                              return (
								  <>
									<h2 className="mb-3">Shipping Info</h2>
									<FormGroup>
										<Input type="email" name="co_email" id="coContactEmail" placeholder="Email (For Order Confirmation)" required onChange={this.onChange} />
									</FormGroup>
									<Row form>
										<Col md={6}>
											<FormGroup>
												<Input type="text" name="co_first_name" id="coFirstName" placeholder="First name" required onChange={this.onChange}/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Input type="text" name="co_last_name" id="coLastName" placeholder="Last name" required onChange={this.onChange}/>
											</FormGroup>
										</Col>
									</Row>
									<FormGroup>
										<Input type="text" name="co_address" id="coAddress" placeholder="Address" required onChange={this.onChange}/>
									</FormGroup>
									<FormGroup>
										<Input type="text" name="co_address2" id="coAddress2" placeholder="Apartment, suite, etc. (optional)" onChange={this.onChange} />
									</FormGroup>
									<FormGroup>
										<Input type="text" name="co_city" id="coCity" placeholder="City" required onChange={this.onChange}/>
									</FormGroup>
									<Row form>
										<Col md={5}>
											<FormGroup className="dropdown-container">
												<Label for="coCountry">Country</Label>
												<CountryOptions />
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup className="dropdown-container">
												<Label for="coState">State</Label>
												<StateOptions onChange={this.onChange}/>
											</FormGroup>
										</Col>
										<Col md={3}>
											<FormGroup>
												<Label for="coZip">Pin</Label>
												<Input className="zip-input" type="text" name="co_zipcode" id="coZipCode" placeholder="Pin Code" required onChange={this.onChange}/>
											</FormGroup>
										</Col>
									</Row>
									<FormGroup>
										<Input type="phone" name="co_phone" id="coPhone" placeholder="Phone (For Shipping Updates)" required onChange={this.onChange} minLength={10} maxLength={10} />
									</FormGroup>
									<FormGroup tag="fieldset">
									<legend>Shipping Options</legend>
									{/* <FormGroup check> */}
									<div>
									<Label check>
											<Input type="radio" value={1} name="radio1" checked/>Rs. 79 Standard Shipping
											<br/>
											<span>3-6 Days | </span>
											<span>Free delivery on order above Rs.1000</span>
										</Label>
									</div>
									<br/>
									<br/>
									{/* </FormGroup> */}
									{/* <FormGroup> */}
									{/* <div>
									<Label check>
											<Input type="radio" value={2} name="radio1"/>Rs. 99 Priority Shipping (1-2 Days)
										</Label>
									</div> */}
									{/* </FormGroup> */}
									</FormGroup>
									<Table>
									<thead>
										<tr>
										<th>Product</th>
										<th>Qty</th>
										<th>Amount</th>
										</tr>
									</thead>
									<tbody>
									{
										itemIds.map((itemId, index) => {
										const { qty, title, price, maxQty } = values.itemsInCart[itemId];
										const arr = [];
										let i = maxQty - 1;
										while (i >= 0 ) {
											arr[i] = null;
											i--;
										}
										return (
											<tr>
											<td>{title}</td>
											<td>
												<Input type="select" name="selectMulti" id="exampleSelectMulti" onChange={e => this.qtyChange(e, values.addToCart, itemId)}>
													{
														arr.map((item, idx) => {
															const selected = idx + 1 === qty;
															return <option selected={selected}>{idx+1}</option>
														})
													}
												</Input>
											</td>
											<td>₹{" " + price*qty+ "  "}
												<FontAwesomeIcon icon={faTrashAlt} onClick={() => this.remove(values.addToCart, itemId)} />
											</td>
										</tr>
										)
										})
									}
									</tbody>
									</Table>
									<Row className="mt-3">
										<Button color="primary"><h6>Proceed To Payment</h6></Button>
									</Row>
								</>
                              )
                            }
                          }
                        </ProductConsumer>
						</div>}
					</div>
				)}
			</Toggle>
		</Form>
    );
  }
}
export default withRouter(FormContactInfo);
