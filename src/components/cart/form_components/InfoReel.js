import React, { Component } from 'react';
import { Container, Col, Row, Toast, ToastBody, ToastHeader } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar1 from '../../assets/images/avatar-1.PNG'
import Avatar2 from '../../assets/images/avatar-2.PNG'
import Avatar3 from '../../assets/images/avatar-3.PNG'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ProductConsumer } from '../../../context';

export default class InfoReel extends Component {
  render() {
    return (
        <div>
    <Container className="mt-3 mb-4">
    <Row>
        <div className="mt-1 rounded" style={{ background: 'black', width: "100%" }}>
        <Toast style={{ maxWidth: "100%" }}>
          <ToastHeader>
            <p>Total Amount Due</p>
          </ToastHeader>
          <ToastBody>
              <p>
                ₹ {" "}​
                <ProductConsumer>
                {
                    values => {
                        let totalAmount = values.getTotalAmount();
                        if (!totalAmount) return "--";
                        if (totalAmount < 1000)  {
                            localStorage.setItem("totalPrice", totalAmount + 79);
                            totalAmount = totalAmount + 79 + " (Including Shipping)";
                            return totalAmount;
                        }
                        localStorage.setItem("totalPrice", totalAmount);
                        return totalAmount + " (Free Shipping)";
                    } 
                }
                </ProductConsumer>
              </p>
          </ToastBody>
        </Toast>
      </div>
        </Row>
        <div className="mb-4 mt-4">
            <span>Customer Reviews</span>
        </div>
        <Row>
            <Col xs="3" className="no-pr">
                <Container className="avatar-container">
                    <img className="avatar img-fluid" src={Avatar1} alt="Avatar1 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Awesome product and fast delivery</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2020-07-21</span>
                    </div>
                    <div className="co-review-desc">
                        <p>Received my puzzle board super fast!!!</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="no-pr" xs="3">
                <Container className="avatar-container">
                    <img className="avatar img-fluid" src={Avatar2} alt="Avatar2 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Nice customer service</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2020-07-21</span>
                    </div>
                    <div className="co-review-desc">
                        <p>They are excellent in customer satisfaction</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="no-pr" xs="3">
                <Container className="avatar-container">
                    <img className="avatar img-fluid" src={Avatar3} alt="Avatar3 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Good price and selection</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2020-07-24</span>
                    </div>
                    <div className="co-review-desc">
                        <p>Like their hand picked collection.Keep it up!!</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    </div>
    )
  }
}
