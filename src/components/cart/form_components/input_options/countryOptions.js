import React from 'react';
import { Input } from "reactstrap";

class countryOptions extends React.Component {
    render() {
		return (
			<Input className="custom-select" type="select" name="coSelectCountry" id="coCountry">
                <option data-code="IN" defaultValue="selected" value="India">India</option>
            </Input>
		);
	}
}

export default countryOptions;