var React = require('react');
var createReactClass = require("create-react-class");
var ProductConsumer = require( "../../context");
var obj = require("react-router-dom");
/**
 * [ProductBuyActions description]
 * @type {[type]}
 */
var ProductBuyActions = createReactClass({

  getInitialState: function() {
    return {
      paymentLink: "",
      count: this.props.qty,
    }
  },
  /**
   * Determine wether or not hte product is available in store.
   * @return {Boolean}
   */
  isAvailableRetail: function() {
    let availability = this.props.availabilityCode;
    return (availability === "0" || availability === "2")
  },


  /**
   * Determine wether or not hte product is available online.
   * @return {Boolean}
   */
  isAvailableOnline: function() {
    let availability = this.props.availabilityCode;
    return (availability === "0" || availability === "1")
  },


  goToPayment: function(isloggedIn, addToCart) {
    if (!isloggedIn) {
      alert("Please login to Add Products");
      return;
    }
    addToCart({ id: this.props.id, qty: this.props.qty });
    this.props.history.push("/cart", { maxQty: this.props.maxQuantity, qty: this.props.qty });
  },

  addToCart: function(isloggedIn, addToCart) {
    if (!isloggedIn) {
      alert("Please login to Add Products");
      return;
    }
    addToCart({ id: this.props.id, qty: this.props.qty });
  },

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    let showRetailButton = this.isAvailableRetail();
    let showOnlineButton = this.isAvailableOnline();
    return (
      <div className="product-buy-actions">
        <ProductConsumer.ProductConsumer>
          {value => {
            const item = value.itemsInCart[this.props.id] || 0;
            console.log(item);
            return (
              <>
                {
                  item.qty === this.props.maxQuantity && this.props.qty === this.props.maxQuantity && <span>{"  "}Max Quantity Added.</span>
                }
              <div className="row no-gutter">
                {showRetailButton &&
                  <div className="col-xs-12 col-sm-6">
                  <button className="btn btn-secondary btn-lg btn-full">
                    Pickup in Store
                  </button>
                  <div className="caption">Find in a Store</div></div>}
                {showOnlineButton &&
                  <div className="col-xs-8 col-sm-12">
                    <div className="col-xs-12 col-sm-4 ml-1 mt-2">
                      <button className="btn btn-primary btn-lg btn-full" 
                        disabled={item.qty === this.props.maxQuantity && this.props.qty === this.props.maxQuantity}
                        onClick={() => this.addToCart(value.isloggedIn, value.addToCart)}>Add to Cart</button>
                    </div>
                    <div className="col-xs-12 col-sm-4 mt-2">
                      <button className="btn btn-primary btn-lg btn-full" onClick={() => this.goToPayment(value.isloggedIn, value.addToCart)}>Buy Now</button>
                    </div>
                  </div>}
              </div>
              </>
            )
          }}
        </ProductConsumer.ProductConsumer>
      </div>
    )
  }
});

export default obj.withRouter(ProductBuyActions);
