var React = require('react');
var createReactClass = require("create-react-class");
/**
 * Displays the product price.
 */
var ProductPrice = createReactClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="product-price">
        <h3>&#8377; {this.props.price}</h3>
        <span>{this.props.info}</span>
      </div>
    )
  }
});

export default ProductPrice;
