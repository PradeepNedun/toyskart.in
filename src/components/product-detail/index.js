import "../product-detail/scss/index.scss";
import React from "react";
import ProductImageCarousel from "./carousel";
import ProductPrice from "./product-price";
import ProductName from "./product-name.js";
import ProductOffers from "./product-offers";
import ProductQuantity from "./product-quantity";
import ProductBuyActions from "./product-buy-actions";
import ProductDetail from "./product-detail";
import createReactClass from "create-react-class";
// import { Link } from "react-router-dom";

/**
 * Product Detail Component
 */
var Product = createReactClass({
  /**
   * Called before the render method is executed. Fetches data and sets it.
   */
  componentWillMount: function () {
    window.scrollTo(0, 0);
    let self = this;

    this.serverRequest = fetch("data.json")
      .then((response) => response.json())
      .then(
        function (data) {
          let product = data.CatalogEntryView[0];


        }.bind(this)
      )
      .catch(function (err) {
        console.error(err);
      });
  },

  /**
   * Invoked immediately before component is unmounted from the DOM.
   * Abort data fetch.
   */
  componentWillUnmount: function () {
    // this.serverRequest.abort(); // trigger fetch cancellation
  },

  /**
   * Set initial state properties
   *
   * @return {Object} state initial props used throughout all other
   *                        child components
   */
  getInitialState: function () {
    return {
      name: "",
      images: [],
      price: "",
      offers: [],
      availabilityCode: "",
      features: [],
      qty: 1,
    };
  },

  setSelectedQuantity: function(qty) {
    this.setState({
      qty
    });
  },

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function () {
    return (
      <div>
        <div className="container" style={{overflow:"auto"}}>
          {/* <Link to="/list" className="mt-1">Back To Products</Link> */}
          <div className="col-xs-12 col-sm-4">
            <ProductName name={this.props.location.state.title} />
            <ProductImageCarousel images={[this.props.location.state.img]} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <ProductPrice price={this.props.location.state.price} info={this.props.location.state.info}/>
            <ProductOffers promotions={this.props.location.state.offers || []} />
            <ProductQuantity minQuantity={0} maxQuantity={this.props.location.state.count} setSelectedQuantity={this.setSelectedQuantity} id={this.props.location.state.id} />
            <ProductBuyActions availabilityCode={"1"} id={this.props.location.state.id}
              disableAddToCart={this.state.qty === this.props.location.state.count}
              maxQuantity={this.props.location.state.count} qty={this.state.qty} />
            {/* <ProductSecondaryActions /> */}
            <ProductDetail features={this.props.location.state.features || []} />
          </div>
        </div>
      </div>
    );
  },
});

export default Product;
