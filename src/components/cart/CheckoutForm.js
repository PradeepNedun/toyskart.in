import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";
import ContactInfo from './form_components/ContactInfo';
import InfoReel from './form_components/InfoReel';


class CheckoutForm extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            data : ""
		};
    
    }

    formChild1(params) {
        this.setState({
          data : params
        })
      }


    render() {
		return (
            <Container>
                <Row>
                    <Col className="left-col-container" md="6" style={{ position: 'relative' }}>
                        <ContactInfo maxQty={1} qty={1} />
                        <br/>
                    </Col>
                    <Col className="right-col-container pb-4" md="6">
                        <InfoReel />
                    </Col>
                </Row>
            </Container>
		);
	}
}

export default CheckoutForm;
