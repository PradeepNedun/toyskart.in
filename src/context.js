import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    itemsInCart: JSON.parse(this.getCookie("products") || "{}"),
    isloggedIn: this.getCookie("uuid") || false
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  totalProductsInCart = () => {
    let qty = 0;
    const arr = Object.keys(this.state.itemsInCart);
    let l = arr.length - 1;
    while(l >= 0) {
      qty = qty + this.state.itemsInCart[arr[l]].qty;
      l--;
    }
    return qty;
  }


  getTotalAmount = () => {
    let totalAmount = 0;
    const allItems = Object.keys(this.state.itemsInCart);
    allItems.forEach(item => totalAmount = totalAmount + this.state.itemsInCart[item].qty * this.state.itemsInCart[item].price);
    return totalAmount;
  }

  addToCart = item => {
    console.log(item);
    let items = {...this.state.itemsInCart};
    let title;
    let price;
    let maxQty;
    if (!item.qty) {
      delete items[item.id]
      this.setCookie("products", JSON.stringify(items), 1);
      this.setState({ itemsInCart: items });
      return;
    }
    storeProducts.forEach(product => {
      if(item.id === product.id) {
        title = product.title;
        price = product.price;
        maxQty = product.count;
      }
    });
    items[item.id] = {
      qty: item.qty,
      title,
      price,
      maxQty
    };
    this.setCookie("products", JSON.stringify(items), 1);
    this.setState({ itemsInCart: items });
  };

  setLogInStatus = flag => {
    this.setState({ isloggedIn: flag });
  }

  setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) ===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  eraseCookie = ( name = "uuid", flag) => {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    if(!flag) {
      this.setLogInStatus(false);
      document.cookie = "products" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      localStorage.setItem("totalPrice", 0);
    }
    this.setState({ itemsInCart: {} });
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          setLogInStatus: this.setLogInStatus,
          setCookie: this.setCookie,
          eraseCookie: this.eraseCookie,
          totalProductsInCart: this.totalProductsInCart,
          getTotalAmount: this.getTotalAmount,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
