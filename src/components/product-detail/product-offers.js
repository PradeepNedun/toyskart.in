var React = require('react');
var createReactClass = require("create-react-class");
/**
 * Displays a stylized list containing product offers.
 */
var ProductOffers = createReactClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    let offers = this.props.promotions;
    return (
      <ul className="theme-offers product-offers">
        {offers.map(function(offer, index) {
          return (
            <li key={'offer-' + index}>
              {offer}
            </li>
          );
        })}
      </ul>
    )
  }

});

export default ProductOffers;
