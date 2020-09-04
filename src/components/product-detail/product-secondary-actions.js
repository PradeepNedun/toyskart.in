var React = require('react');
var createReactClass = require("create-react-class");
/**
 * Displays secondary (lower priority) actions
 */
var ProductSecondaryActions = createReactClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="product-secondary-actions">
        <div className="row no-gutter">
          <div className="col-xs-4">
            <button className="btn btn-full">Add to List</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-full">Share</button>
          </div>
        </div>
      </div>
    )
  }

});

export default ProductSecondaryActions;
