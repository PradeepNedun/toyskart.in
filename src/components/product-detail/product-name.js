var React = require('react');
var createReactClass = require("create-react-class");
/**
 * Component that displays the product name
 */
var ProductName = createReactClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {

      return (
        <div className="product-name">
          <h1 className='title text-center'>{this.props.name}</h1>
        </div>
      )

  }
});

export default ProductName;
