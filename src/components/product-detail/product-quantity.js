var React = require('react');
var createReactClass = require("create-react-class");
var ProductConsumer = require( "../../context");
/**
 * [ProductQuantity description]
 * @type {[type]}
 */
var ProductQuantity = createReactClass({

  /**
   * Set initial state properties
   *
   * @return {Object} state initial props used throughout all other
   *                        child components
   */
  getInitialState: function() {
    return {
      quantity: 1,
      isMinQuantity: true
    }
  },

  /**
   * Determine if this is the minimum quantity allowed for product.
   * @return {Boolean} [description]
   */
  isMinQuantity: function(quantity){
    return (quantity === this.props.minQuantity)
  },

  /**
   * Determine if this is the maximum quantity allowed for product.
   *
   * @return {Boolean} isMaxQuantity
   */
  isMaxQuantity: function(quantity){
    return (quantity === this.props.maxQuantity)
  },

  /**
   * Increment and set State Quantity by 1
   */
  addQuantity: function(addToCart) {
    let quantity = this.state.quantity + 1;
    this.props.setSelectedQuantity(quantity);
    addToCart({ id: this.props.id, qty: quantity });
    this.setState({
      quantity: quantity,
      isMinQuantity: this.isMinQuantity(quantity),
      isMaxQuantity: this.isMaxQuantity(quantity)
    });
  },

  /**
   * Decrement and set State Quantity by 1
   */
  decQuantity: function(addToCart) {
    let quantity = this.state.quantity - 1;
    this.props.setSelectedQuantity(quantity);
    addToCart({ id: this.props.id, qty: quantity });
    this.setState({
      quantity: quantity,
      isMinQuantity: this.isMinQuantity(quantity),
      isMaxQuantity: this.isMaxQuantity(quantity)
    })
  },

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <ProductConsumer.ProductConsumer>
      {
        values => {
          return (
            <div className="product-quantity">
              <div className="label">Quantity</div>
              <div className="controls">
                <button
                disabled={this.state.isMinQuantity}
                onClick={() => this.decQuantity(values.addToCart)}>
                  &#8722;
                </button>
                <strong>{this.state.quantity}</strong>
                <button
                disabled={this.state.isMaxQuantity}
                onClick={() => this.addQuantity(values.addToCart)}>
                  &#43;
                </button>
              </div>
            </div>
          )
        }
      }
    </ProductConsumer.ProductConsumer>
    )
  }
});

export default ProductQuantity;
