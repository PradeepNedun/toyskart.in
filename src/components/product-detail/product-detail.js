var React = require('react');
var createReactClass = require("create-react-class");
/**
 * Component that displays additional product information (highlights)
 */
var ProductDetail = createReactClass({

  /**
   * Renders the component
   *
   * NOTE: By default, React escapes HTML to prevent XSS attacks. As a result,
   * we must use dangerouslySetInnerHTML to render the apropriate value.
   *
   * @return {String} HTML markup for the component
   */
  render: function() {

    let features = this.props.features;

    return (
      <div className="product-detail">
        <h4>Product Highlights</h4>
        <br/>
        <ul>
          {features.map(function(feature, index) {
            return <li
              key={'feature-' + index}
              dangerouslySetInnerHTML={{__html: feature}}>
            </li>;
          })}
        </ul>
      </div>
    )

  }
});

export default ProductDetail;
