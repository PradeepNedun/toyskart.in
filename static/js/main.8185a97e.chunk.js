(window.webpackJsonpstorefront = window.webpackJsonpstorefront || []).push([
    [0], {
        14: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(51),
                r = a(22),
                i = a(4),
                o = a(5),
                l = a(7),
                c = a(6),
                s = a(8),
                m = a(0),
                u = a.n(m),
                d = [{
                    id: 8,
                    title: "Alphabet Train Tiles",
                    img: "toyskart.in/img/LAT-01.png",
                    price: 599,
                    company: "apple",
                    info: "Size: thickeness 8mm",
                    inCart: !1,
                    count: 2,
                    total: 0,
                    features: ["<strong>Make in India</strong>", "<strong>Non Toxic</strong>", "<strong>No Lead</strong>", "<strong>Eco Friendly</strong>", "<strong>The Mark of Responsible Forestry</strong>", "<strong>Wooden Material</strong>", "<strong>100% Child Safe</strong>"],
                    offers: ["Free Shipping on Order value above Rs.1000", "Rs.200 gift card with purchase of order value above Rs.2000"]
                }, {
                    id: 9,
                    title: "Shapes Lift Out-Big Puzzle",
                    img: "toyskart.in/img/FB-04.png",
                    price: 399,
                    company: "apple",
                    info: "Size: length 12 inches | width 12 inches | thickeness 8mm",
                    inCart: !1,
                    count: 2,
                    total: 0,
                    features: ["<strong>Make in India</strong>", "<strong>Non Toxic</strong>", "<strong>No Lead</strong>", "<strong>Eco Friendly</strong>", "<strong>The Mark of Responsible Forestry</strong>", "<strong>Wooden Material</strong>", "<strong>100% Child Safe</strong>"],
                    offers: ["Free Shipping on Order value above Rs.1000", "Rs.200 gift card with purchase of order value above Rs.2000"]
                }, {
                    id: 10,
                    title: "Fruits Lift Out-Big Puzzle",
                    img: "toyskart.in/img/FBP-01.png",
                    price: 449,
                    company: "apple",
                    info: "Size: length 12 inches | width 12 inches | thickeness 8mm",
                    inCart: !1,
                    count: 2,
                    total: 0,
                    features: ["<strong>Make in India</strong>", "<strong>Non Toxic</strong>", "<strong>No Lead</strong>", "<strong>Eco Friendly</strong>", "<strong>The Mark of Responsible Forestry</strong>", "<strong>Wooden Material</strong>", "<strong>100% Child Safe</strong>"],
                    offers: ["Free Shipping on Order value above Rs.1000", "Rs.200 gift card with purchase of order value above Rs.2000"]
                }, {
                    id: 11,
                    title: "Vegt. Lift Out-Big Puzzle",
                    img: "toyskart.in/img/VBP-01.png",
                    price: 449,
                    company: "apple",
                    info: "Size: length 12 inches | width 12 inches | thickeness 8mm",
                    inCart: !1,
                    count: 2,
                    total: 0,
                    features: ["<strong>Make in India</strong>", "<strong>Non Toxic</strong>", "<strong>No Lead</strong>", "<strong>Eco Friendly</strong>", "<strong>The Mark of Responsible Forestry</strong>", "<strong>Wooden Material</strong>", "<strong>100% Child Safe</strong>"],
                    offers: ["Free Shipping on Order value above Rs.1000", "Rs.200 gift card with purchase of order value above Rs.2000"]
                }],
                p = {
                    id: 1,
                    title: "Black Penguin Slate",
                    img: "toyskart.in/img/product-1.png",
                    price: 10,
                    company: "google",
                    info: "",
                    inCart: !1,
                    count: 0,
                    total: 0
                };

            function h(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(a, !0).forEach((function(t) {
                        Object(r.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : h(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            a.d(t, "ProductProvider", (function() {
                return f
            })), a.d(t, "ProductConsumer", (function() {
                return y
            }));
            var E = u.a.createContext(),
                f = function(e) {
                    function t() {
                        var e, a;
                        Object(i.a)(this, t);
                        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            products: [],
                            detailProduct: p,
                            itemsInCart: JSON.parse(a.getCookie("products") || "{}"),
                            isloggedIn: a.getCookie("uuid") || !1
                        }, a.setProducts = function() {
                            var e = [];
                            d.forEach((function(t) {
                                var a = g({}, t);
                                e = [].concat(Object(n.a)(e), [a])
                            })), a.setState((function() {
                                return {
                                    products: e
                                }
                            }))
                        }, a.handleDetail = function() {
                            console.log("hello from detail")
                        }, a.totalProductsInCart = function() {
                            for (var e = 0, t = Object.keys(a.state.itemsInCart), n = t.length - 1; n >= 0;) e += a.state.itemsInCart[t[n]].qty, n--;
                            return e
                        }, a.getTotalAmount = function() {
                            var e = 0;
                            return Object.keys(a.state.itemsInCart).forEach((function(t) {
                                return e += a.state.itemsInCart[t].qty * a.state.itemsInCart[t].price
                            })), e
                        }, a.addToCart = function(e) {
                            console.log(e);
                            var t, n, r, i = g({}, a.state.itemsInCart);
                            if (!e.qty) return delete i[e.id], a.setCookie("products", JSON.stringify(i), 1), void a.setState({
                                itemsInCart: i
                            });
                            d.forEach((function(a) {
                                e.id === a.id && (t = a.title, n = a.price, r = a.count)
                            })), i[e.id] = {
                                qty: e.qty,
                                title: t,
                                price: n,
                                maxQty: r
                            }, a.setCookie("products", JSON.stringify(i), 1), a.setState({
                                itemsInCart: i
                            })
                        }, a.setLogInStatus = function(e) {
                            a.setState({
                                isloggedIn: e
                            })
                        }, a.eraseCookie = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uuid",
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", t || (a.setLogInStatus(!1), localStorage.setItem("totalPrice", 0)), a.setState({
                                itemsInCart: {}
                            })
                        }, a
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setProducts()
                        }
                    }, {
                        key: "setCookie",
                        value: function(e, t, a) {
                            var n = "";
                            if (a) {
                                var r = new Date;
                                r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3), n = "; expires=" + r.toUTCString()
                            }
                            document.cookie = e + "=" + (t || "") + n + "; path=/"
                        }
                    }, {
                        key: "getCookie",
                        value: function(e) {
                            for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                                for (var r = a[n];
                                    " " === r.charAt(0);) r = r.substring(1, r.length);
                                if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                            }
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return u.a.createElement(E.Provider, {
                                value: g({}, this.state, {
                                    handleDetail: this.handleDetail,
                                    addToCart: this.addToCart,
                                    setLogInStatus: this.setLogInStatus,
                                    setCookie: this.setCookie,
                                    eraseCookie: this.eraseCookie,
                                    totalProductsInCart: this.totalProductsInCart,
                                    getTotalAmount: this.getTotalAmount
                                })
                            }, this.props.children)
                        }
                    }]), t
                }(m.Component),
                y = E.Consumer
        },
        40: function(e, t) {
            e.exports = "data:image/png;base64,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"
        },
        47: function(e, t, a) {
            e.exports = a.p + "static/media/avatar-1.51a3f4ee.PNG"
        },
        48: function(e, t, a) {
            e.exports = a.p + "static/media/avatar-2.93eba42b.PNG"
        },
        49: function(e, t, a) {
            e.exports = a.p + "static/media/avatar-3.ad5085f4.PNG"
        },
        54: function(e, t, a) {
            e.exports = a(81)
        },
        59: function(e, t, a) {},
        60: function(e, t, a) {},
        66: function(e, t, a) {},
        80: function(e, t, a) {},
        81: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(25),
                o = a.n(i),
                l = (a(59), a(4)),
                c = a(5),
                s = a(7),
                m = a(6),
                u = a(8),
                d = (a(60), a(61), a(11)),
                p = a(40),
                h = a.n(p),
                g = a(14),
                E = a(82),
                f = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(g.ProductConsumer, null, (function(e) {
                                var t = e.isloggedIn;
                                return r.a.createElement("nav", {
                                    className: "navbar navbar-expand-sm bg-primary navbar-dark px-sm-5"
                                }, r.a.createElement(d.Link, {
                                    to: "/"
                                }, r.a.createElement("img", {
                                    src: h.a,
                                    className: "navbar-brand",
                                    alt: "logo",
                                    style: {
                                        height: "60px",
                                        width: "100px"
                                    }
                                })), r.a.createElement("ul", {
                                    className: "navbar-nav align-items-center"
                                }, r.a.createElement(d.Link, {
                                    to: "/list",
                                    className: "nav-link ml-5",
                                    style: {
                                        color: "#FFF"
                                    }
                                }, "Products")), !t && r.a.createElement("ul", {
                                    className: "navbar-nav align-items-center"
                                }, r.a.createElement(d.Link, {
                                    to: "/login",
                                    className: "nav-link ml-5"
                                }, "Login")), t && r.a.createElement(r.a.Fragment, null, r.a.createElement(d.Link, {
                                    to: "/cart",
                                    className: "ml-auto"
                                }, r.a.createElement(E.a, {
                                    color: "warning",
                                    style: {
                                        height: "40px",
                                        width: "120px",
                                        fontSize: "14px"
                                    }
                                }, r.a.createElement("span", {
                                    className: "mr-2"
                                }, r.a.createElement("i", {
                                    className: "fas fa-cart-plus",
                                    "aria-hidden": "true"
                                })), r.a.createElement("span", null, "My Cart | ", " ", " ", e.totalProductsInCart()))), r.a.createElement(d.Link, {
                                    onClick: function() {
                                        return e.eraseCookie()
                                    },
                                    className: "nav-link",
                                    style: {
                                        color: "#FFF"
                                    },
                                    to: "/"
                                }, "LogOut")))
                            }))
                        }
                    }]), t
                }(n.Component),
                y = a(43),
                v = a(44);

            function b() {
                var e = Object(y.a)(["\n  .card {\n    border-color: transparent;\n    transition: all 500ms linear;\n  }\n  .card-footer {\n    background: transparent;\n    border-top: transparent;\n    transition: all 500ms linear;\n  }\n  &:hover {\n    .card {\n      border: 0.04rem solid rgba(0, 0, 0, 0.2);\n      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);\n    }\n    .card-footer {\n      background: rgba(247, 247, 247);\n    }\n  }\n  .img-container {\n    position: relative;\n    overflow: hidden;\n  }\n  .card-img-top {\n    transition: all 500ms linear;\n  }\n  .img-container:hover .card-img-top {\n    transform: scale(1.2);\n  }\n  .cart-btn {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0.2rem 0.4rem;\n    background: var(--lightBlue);\n    border: none;\n    color: var(--mainWhite);\n    font-size: 1.4rem;\n    border-radius: 0.5rem 0 0 0;\n    transition: all 250ms linear;\n    transform: translate(100%, 100%);\n  }\n  .img-container:hover .cart-btn {\n    transform: translate(0, 0);\n  }\n  .cart-btn:hover {\n    color: var(--mainBlue);\n    cursor: pointer;\n  }\n"]);
                return b = function() {
                    return e
                }, e
            }
            var C = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.product,
                                a = t.id,
                                n = t.title,
                                i = t.img,
                                o = t.price;
                            return r.a.createElement(N, {
                                className: "col-9 mx-auto col-md-6 col-lg-3 my-3"
                            }, r.a.createElement("div", {
                                className: "card"
                            }, r.a.createElement("div", {
                                className: "img-container p-3",
                                onClick: function() {
                                    console.log("you clicked me on image container")
                                }
                            }, r.a.createElement(d.Link, {
                                to: {
                                    pathname: "/details",
                                    state: this.props.product
                                }
                            }, r.a.createElement("img", {
                                src: i,
                                alt: "product",
                                className: "card-img-top"
                            }))), r.a.createElement("div", {
                                className: "card-footer d-flex justify-content-between"
                            }, r.a.createElement("span", {
                                className: "align-self-center mb-0"
                            }, n), r.a.createElement("span", null, "\xa0\xa0"), r.a.createElement("h5", {
                                className: "text-blue font-italic mb-0"
                            }, r.a.createElement("span", {
                                className: "mr-1"
                            }, "Rs."), o)), r.a.createElement(E.a, {
                                color: "primary",
                                className: "m-3",
                                disabled: this.props.inCart,
                                onClick: function() {
                                    e.props.isLoggedIn ? (e.props.onCartAdd({
                                        id: a,
                                        qty: 1
                                    }), console.log("added to the cart")) : alert("Please login to Add Products")
                                }
                            }, this.props.inCart ? r.a.createElement("span", {
                                className: "text-capitalize mb-0",
                                disabled: !0
                            }, " ", "in cart") : r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fas fa-cart-plus"
                            }), " ", "Add To Cart"))))
                        }
                    }]), t
                }(n.Component),
                N = v.a.div(b()),
                k = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "py-5"
                            }, r.a.createElement("div", {
                                className: "container"
                            }, r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement(g.ProductConsumer, null, (function(e) {
                                return e.products.map((function(t) {
                                    return console.log(e.itemsInCart[t.id], t.id), r.a.createElement(C, {
                                        key: t.id,
                                        product: t,
                                        onCartAdd: e.addToCart,
                                        isLoggedIn: e.isloggedIn,
                                        inCart: e.itemsInCart[t.id]
                                    })
                                }))
                            }))))))
                        }
                    }]), t
                }(n.Component),
                O = (a(66), a(0)),
                S = a(18)({
                    displayName: "CarouselSlide",
                    isActiveSlide: function() {
                        return this.props.index === this.props.currentSlide
                    },
                    render: function() {
                        var e = this.isActiveSlide() ? "is-active" : null;
                        return O.createElement("li", {
                            className: e
                        }, O.createElement("img", {
                            src: this.props.image
                        }))
                    }
                }),
                j = a(0),
                x = a(18)({
                    displayName: "CarouselControl",
                    getInitialState: function() {
                        return {
                            controlWidth: "",
                            controlOffset: 0
                        }
                    },
                    thumbWidth: function() {
                        return 66
                    },
                    componentWillReceiveProps: function(e) {
                        var t = e.totalSlides * this.thumbWidth();
                        this.setState({
                            controlWidth: t
                        })
                    },
                    getControlOffset: function(e) {
                        var t = -e * this.thumbWidth(),
                            a = -1 === e,
                            n = e === this.props.totalSlides - 2;
                        return !a && !n && t
                    },
                    isActiveSlide: function(e) {
                        return e === this.props.currentSlide
                    },
                    className: function(e) {
                        if (this.isActiveSlide(e)) return "is-active"
                    },
                    slideNext: function() {
                        this.slideChange(this.props.currentSlide + 1)
                    },
                    slidePrev: function() {
                        this.slideChange(this.props.currentSlide - 1)
                    },
                    slideChange: function(e) {
                        this.props.handleSlideChange(e), this.setState({
                            controlOffset: this.getControlOffset(e - 1)
                        })
                    },
                    render: function() {
                        var e = this.props.images,
                            t = ["controls", this.props.isLeftDisabled ? "is-first" : "", this.props.isRightDisabled ? "is-last" : ""].join(" "),
                            a = {
                                width: this.state.controlWidth,
                                transform: "translateX(".concat(this.state.controlOffset, "px)"),
                                WebkitTransition: "transform .25s ease-in-out"
                            };
                        return j.createElement("div", {
                            className: "slide-control list-inline"
                        }, j.createElement("button", {
                            className: "btn btn-direction",
                            disabled: this.props.isLeftDisabled,
                            onClick: this.slidePrev
                        }, "\u2039"), j.createElement("div", {
                            className: "controls-wrapper"
                        }, j.createElement("ul", {
                            className: t,
                            style: a
                        }, e.map((function(e, t) {
                            return j.createElement("li", {
                                key: "slide-" + t,
                                className: this.className(t)
                            }, j.createElement("a", {
                                tabIndex: "-1",
                                href: "javascript:void(0)",
                                onClick: this.slideChange.bind(null, t)
                            }, j.createElement("img", {
                                src: e
                            })))
                        }), this))), j.createElement("button", {
                            className: "btn btn-direction",
                            disabled: this.props.isRightDisabled,
                            onClick: this.slideNext
                        }, "\u203a"))
                    }
                }),
                G = a(18)({
                    displayName: "Carousel",
                    getInitialState: function() {
                        return {
                            currentSlide: 0,
                            isLeftDisabled: !0,
                            isRightDisabled: !1
                        }
                    },
                    slideChange: function(e) {
                        var t = 0 === e,
                            a = e === this.props.images.length - 1;
                        this.setState({
                            isLeftDisabled: t,
                            isRightDisabled: a,
                            currentSlide: e
                        })
                    },
                    render: function() {
                        var e = this.props.images;
                        return r.a.createElement("div", {
                            className: "carousel"
                        }, r.a.createElement("ul", {
                            className: "slides list-unstyled"
                        }, e.map((function(e, t) {
                            return r.a.createElement(S, {
                                key: "slide-" + t,
                                image: e,
                                index: t,
                                currentSlide: this.state.currentSlide
                            })
                        }), this)), r.a.createElement(x, {
                            handleSlideChange: this.slideChange,
                            images: e,
                            totalSlides: this.props.images.length,
                            currentSlide: this.state.currentSlide,
                            isLeftDisabled: this.state.isLeftDisabled,
                            isRightDisabled: this.state.isRightDisabled
                        }))
                    }
                }),
                Q = a(0),
                P = a(18)({
                    displayName: "ProductPrice",
                    render: function() {
                        return Q.createElement("div", {
                            className: "product-price"
                        }, Q.createElement("h3", null, "\u20b9 ", this.props.price), Q.createElement("span", null, this.props.info))
                    }
                }),
                A = a(0),
                I = a(18)({
                    displayName: "ProductName",
                    render: function() {
                        return A.createElement("div", {
                            className: "product-name"
                        }, A.createElement("h1", {
                            className: "title text-center"
                        }, this.props.name))
                    }
                }),
                M = a(0),
                R = a(18)({
                    displayName: "ProductOffers",
                    render: function() {
                        var e = this.props.promotions;
                        return M.createElement("ul", {
                            className: "theme-offers product-offers"
                        }, e.map((function(e, t) {
                            return M.createElement("li", {
                                key: "offer-" + t
                            }, e)
                        })))
                    }
                }),
                Y = a(0),
                T = a(18),
                B = a(14),
                D = T({
                    displayName: "ProductQuantity",
                    getInitialState: function() {
                        return {
                            quantity: 1,
                            isMinQuantity: !0
                        }
                    },
                    isMinQuantity: function(e) {
                        return e === this.props.minQuantity
                    },
                    isMaxQuantity: function(e) {
                        return e === this.props.maxQuantity
                    },
                    addQuantity: function(e) {
                        var t = this.state.quantity + 1;
                        this.props.setSelectedQuantity(t), e({
                            id: this.props.id,
                            qty: t
                        }), this.setState({
                            quantity: t,
                            isMinQuantity: this.isMinQuantity(t),
                            isMaxQuantity: this.isMaxQuantity(t)
                        })
                    },
                    decQuantity: function(e) {
                        var t = this.state.quantity - 1;
                        this.props.setSelectedQuantity(t), e({
                            id: this.props.id,
                            qty: t
                        }), this.setState({
                            quantity: t,
                            isMinQuantity: this.isMinQuantity(t),
                            isMaxQuantity: this.isMaxQuantity(t)
                        })
                    },
                    render: function() {
                        var e = this;
                        return Y.createElement(B.ProductConsumer, null, (function(t) {
                            return Y.createElement("div", {
                                className: "product-quantity"
                            }, Y.createElement("div", {
                                className: "label"
                            }, "Quantity"), Y.createElement("div", {
                                className: "controls"
                            }, Y.createElement("button", {
                                disabled: e.state.isMinQuantity,
                                onClick: function() {
                                    return e.decQuantity(t.addToCart)
                                }
                            }, "\u2212"), Y.createElement("strong", null, e.state.quantity), Y.createElement("button", {
                                disabled: e.state.isMaxQuantity,
                                onClick: function() {
                                    return e.addQuantity(t.addToCart)
                                }
                            }, "+")))
                        }))
                    }
                }),
                w = a(0),
                L = a(18),
                q = a(14),
                J = a(11),
                H = L({
                    displayName: "ProductBuyActions",
                    getInitialState: function() {
                        return {
                            paymentLink: "",
                            count: this.props.qty
                        }
                    },
                    isAvailableRetail: function() {
                        var e = this.props.availabilityCode;
                        return "0" === e || "2" === e
                    },
                    isAvailableOnline: function() {
                        var e = this.props.availabilityCode;
                        return "0" === e || "1" === e
                    },
                    goToPayment: function(e, t) {
                        e ? (t({
                            id: this.props.id,
                            qty: this.props.qty
                        }), this.props.history.push("/cart", {
                            maxQty: this.props.maxQuantity,
                            qty: this.props.qty
                        })) : alert("Please login to Add Products")
                    },
                    addToCart: function(e, t) {
                        e ? t({
                            id: this.props.id,
                            qty: this.props.qty
                        }) : alert("Please login to Add Products")
                    },
                    render: function() {
                        var e = this,
                            t = this.isAvailableRetail(),
                            a = this.isAvailableOnline();
                        return w.createElement("div", {
                            className: "product-buy-actions"
                        }, w.createElement(q.ProductConsumer, null, (function(n) {
                            var r = n.itemsInCart[e.props.id] || 0;
                            return console.log(r), w.createElement(w.Fragment, null, r.qty === e.props.maxQuantity && e.props.qty === e.props.maxQuantity && w.createElement("span", null, "  ", "Max Quantity Added."), w.createElement("div", {
                                className: "row no-gutter"
                            }, t && w.createElement("div", {
                                className: "col-xs-12 col-sm-6"
                            }, w.createElement("button", {
                                className: "btn btn-secondary btn-lg btn-full"
                            }, "Pickup in Store"), w.createElement("div", {
                                className: "caption"
                            }, "Find in a Store")), a && w.createElement("div", {
                                className: "col-xs-8 col-sm-12"
                            }, w.createElement("div", {
                                className: "col-xs-12 col-sm-4 ml-1 mt-2"
                            }, w.createElement("button", {
                                className: "btn btn-primary btn-lg btn-full",
                                disabled: r.qty === e.props.maxQuantity && e.props.qty === e.props.maxQuantity,
                                onClick: function() {
                                    return e.addToCart(n.isloggedIn, n.addToCart)
                                }
                            }, "Add to Cart")), w.createElement("div", {
                                className: "col-xs-12 col-sm-4 mt-2"
                            }, w.createElement("button", {
                                className: "btn btn-primary btn-lg btn-full",
                                onClick: function() {
                                    return e.goToPayment(n.isloggedIn, n.addToCart)
                                }
                            }, "Buy Now")))))
                        })))
                    }
                }),
                F = J.withRouter(H),
                U = a(0),
                Z = a(18)({
                    displayName: "ProductDetail",
                    render: function() {
                        var e = this.props.features;
                        return U.createElement("div", {
                            className: "product-detail"
                        }, U.createElement("h4", null, "Product Highlights"), U.createElement("br", null), U.createElement("ul", null, e.map((function(e, t) {
                            return U.createElement("li", {
                                key: "feature-" + t,
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            })
                        }))))
                    }
                }),
                W = a(18),
                z = a.n(W)()({
                    displayName: "Product",
                    componentWillMount: function() {
                        window.scrollTo(0, 0);
                        this.serverRequest = fetch("data.json").then((function(e) {
                            return e.json()
                        })).then(function(e) {
                            e.CatalogEntryView[0]
                        }.bind(this)).catch((function(e) {
                            console.error(e)
                        }))
                    },
                    componentWillUnmount: function() {},
                    getInitialState: function() {
                        return {
                            name: "",
                            images: [],
                            price: "",
                            offers: [],
                            availabilityCode: "",
                            features: [],
                            qty: 1
                        }
                    },
                    setSelectedQuantity: function(e) {
                        this.setState({
                            qty: e
                        })
                    },
                    render: function() {
                        return r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "col-xs-12 col-sm-4"
                        }, r.a.createElement(I, {
                            name: this.props.location.state.title
                        }), r.a.createElement(G, {
                            images: [this.props.location.state.img]
                        })), r.a.createElement("div", {
                            className: "col-xs-12 col-sm-6"
                        }, r.a.createElement(P, {
                            price: this.props.location.state.price,
                            info: this.props.location.state.info
                        }), r.a.createElement(R, {
                            promotions: this.props.location.state.offers || []
                        }), r.a.createElement(D, {
                            minQuantity: 0,
                            maxQuantity: this.props.location.state.count,
                            setSelectedQuantity: this.setSelectedQuantity,
                            id: this.props.location.state.id
                        }), r.a.createElement(F, {
                            availabilityCode: "1",
                            id: this.props.location.state.id,
                            disableAddToCart: this.state.qty === this.props.location.state.count,
                            maxQuantity: this.props.location.state.count,
                            qty: this.state.qty
                        }), r.a.createElement(Z, {
                            features: this.props.location.state.features || []
                        })))
                    }
                }),
                X = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", null, r.a.createElement("h3", null, "Page not found"))
                        }
                    }]), t
                }(n.Component),
                V = a(90),
                K = a(86),
                _ = a(87),
                $ = a(84),
                ee = a(85),
                te = a(83),
                ae = a(88),
                ne = a(89),
                re = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (a = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            on: !1,
                            off: !0
                        }, a.toggle = function() {
                            a.setState({
                                on: !a.state.on,
                                off: !a.state.off
                            })
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return (0, this.props.children)({
                                on: this.state.on,
                                off: this.state.off,
                                toggle: this.toggle
                            })
                        }
                    }]), t
                }(n.Component),
                ie = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(te.a, {
                                className: "custom-select",
                                type: "select",
                                name: "coSelectCountry",
                                id: "coCountry"
                            }, r.a.createElement("option", {
                                "data-code": "IN",
                                defaultValue: "selected",
                                value: "India"
                            }, "India"))
                        }
                    }]), t
                }(r.a.Component),
                oe = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(te.a, {
                                className: "custom-select",
                                type: "select",
                                name: "coSelectState",
                                id: "coState",
                                onChange: this.props.onChange
                            }, r.a.createElement("option", {
                                value: "Andhra Pradesh"
                            }, "Andhra Pradesh"), r.a.createElement("option", {
                                value: "Andaman and Nicobar Islands"
                            }, "Andaman and Nicobar Islands"), r.a.createElement("option", {
                                value: "Arunachal Pradesh"
                            }, "Arunachal Pradesh"), r.a.createElement("option", {
                                value: "Assam"
                            }, "Assam"), r.a.createElement("option", {
                                value: "Bihar"
                            }, "Bihar"), r.a.createElement("option", {
                                value: "Chandigarh"
                            }, "Chandigarh"), r.a.createElement("option", {
                                value: "Chhattisgarh"
                            }, "Chhattisgarh"), r.a.createElement("option", {
                                value: "Dadar and Nagar Haveli"
                            }, "Dadar and Nagar Haveli"), r.a.createElement("option", {
                                value: "Daman and Diu"
                            }, "Daman and Diu"), r.a.createElement("option", {
                                value: "Delhi"
                            }, "Delhi"), r.a.createElement("option", {
                                value: "Lakshadweep"
                            }, "Lakshadweep"), r.a.createElement("option", {
                                value: "Puducherry"
                            }, "Puducherry"), r.a.createElement("option", {
                                value: "Goa"
                            }, "Goa"), r.a.createElement("option", {
                                value: "Gujarat"
                            }, "Gujarat"), r.a.createElement("option", {
                                value: "Haryana"
                            }, "Haryana"), r.a.createElement("option", {
                                value: "Himachal Pradesh"
                            }, "Himachal Pradesh"), r.a.createElement("option", {
                                value: "Jammu and Kashmir"
                            }, "Jammu and Kashmir"), r.a.createElement("option", {
                                value: "Jharkhand"
                            }, "Jharkhand"), r.a.createElement("option", {
                                value: "Karnataka"
                            }, "Karnataka"), r.a.createElement("option", {
                                value: "Kerala"
                            }, "Kerala"), r.a.createElement("option", {
                                value: "Madhya Pradesh"
                            }, "Madhya Pradesh"), r.a.createElement("option", {
                                value: "Maharashtra"
                            }, "Maharashtra"), r.a.createElement("option", {
                                value: "Manipur"
                            }, "Manipur"), r.a.createElement("option", {
                                value: "Meghalaya"
                            }, "Meghalaya"), r.a.createElement("option", {
                                value: "Mizoram"
                            }, "Mizoram"), r.a.createElement("option", {
                                value: "Nagaland"
                            }, "Nagaland"), r.a.createElement("option", {
                                value: "Odisha"
                            }, "Odisha"), r.a.createElement("option", {
                                value: "Punjab"
                            }, "Punjab"), r.a.createElement("option", {
                                value: "Rajasthan"
                            }, "Rajasthan"), r.a.createElement("option", {
                                value: "Sikkim"
                            }, "Sikkim"), r.a.createElement("option", {
                                value: "Tamil Nadu"
                            }, "Tamil Nadu"), r.a.createElement("option", {
                                value: "Telangana"
                            }, "Telangana"), r.a.createElement("option", {
                                value: "Tripura"
                            }, "Tripura"), r.a.createElement("option", {
                                value: "Uttar Pradesh"
                            }, "Uttar Pradesh"), r.a.createElement("option", {
                                value: "Uttarakhand"
                            }, "Uttarakhand"), r.a.createElement("option", {
                                value: "West Bengal"
                            }, "West Bengal"))
                        }
                    }]), t
                }(r.a.Component),
                le = a(20),
                ce = a(13),
                se = a(12),
                me = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(s.a)(this, Object(m.a)(t).call(this, e))).onChange = function(e) {
                            var t = {};
                            t[e.target.name] = e.target.value;
                            var n = Object.assign({}, a.state.customer, t);
                            a.setState({
                                customer: n
                            })
                        }, a.onSubmit = function(e) {
                            var t = a.state.customer,
                                n = t.co_phone,
                                r = t.co_email,
                                i = t.co_first_name,
                                o = new FormData,
                                l = {
                                    appId: "30172e4b88352b8f19feebef127103",
                                    secretKey: "5538a8ff4944458b0a10b866ed11d8486c01e984",
                                    orderId: n + "_" + new Date,
                                    orderAmount: localStorage.getItem("totalPrice"),
                                    orderCurrency: "INR",
                                    orderNote: "Order for " + r,
                                    customerEmail: r,
                                    customerName: i,
                                    customerPhone: n,
                                    returnUrl: "http://localhost:3001/confirm"
                                };
                            o.append("appId", l.appId), o.append("secretKey", l.secretKey), o.append("orderId", l.orderId), o.append("orderAmount", l.orderAmount), o.append("orderCurrency", l.orderCurrency), o.append("orderNote", l.orderNote), o.append("customerEmail", l.customerEmail), o.append("customerName", l.customerName), o.append("customerPhone", l.customerPhone), o.append("returnUrl", l.returnUrl), fetch("https://test.cashfree.com/api/v1/order/create", {
                                method: "post",
                                body: o
                            }).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                console.log(e.paymentLink), window.location.href = e.paymentLink
                            })), e.preventDefault()
                        }, a.qtyChange = function(e, t, a) {
                            t({
                                id: +a,
                                qty: +e.target.value
                            })
                        }, a.remove = function(e, t) {
                            e({
                                id: +t,
                                qty: 0
                            })
                        }, console.log(a.props), a.state = {
                            customer: {},
                            qty: 1
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement($.a, {
                                className: "container-fluid contact-info-container",
                                onSubmit: this.onSubmit,
                                type: "post"
                            }, r.a.createElement(re, null, (function(t) {
                                t.on;
                                var a = t.off;
                                t.toggle;
                                return r.a.createElement("div", {
                                    className: "toggle-container mt-2"
                                }, a && r.a.createElement("div", null, r.a.createElement(g.ProductConsumer, null, (function(t) {
                                    var a = Object.keys(t.itemsInCart);
                                    return a.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", {
                                        className: "mb-3"
                                    }, "Shipping Information"), r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "email",
                                        name: "co_email",
                                        id: "coContactEmail",
                                        placeholder: "Email (For Order Confirmation)",
                                        required: !0,
                                        onChange: e.onChange
                                    })), r.a.createElement(K.a, {
                                        form: !0
                                    }, r.a.createElement(_.a, {
                                        md: 6
                                    }, r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "text",
                                        name: "co_first_name",
                                        id: "coFirstName",
                                        placeholder: "First name",
                                        required: !0,
                                        onChange: e.onChange
                                    }))), r.a.createElement(_.a, {
                                        md: 6
                                    }, r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "text",
                                        name: "co_last_name",
                                        id: "coLastName",
                                        placeholder: "Last name",
                                        required: !0,
                                        onChange: e.onChange
                                    })))), r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "text",
                                        name: "co_address",
                                        id: "coAddress",
                                        placeholder: "Address",
                                        required: !0,
                                        onChange: e.onChange
                                    })), r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "text",
                                        name: "co_address2",
                                        id: "coAddress2",
                                        placeholder: "Apartment, suite, etc. (optional)",
                                        onChange: e.onChange
                                    })), r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "text",
                                        name: "co_city",
                                        id: "coCity",
                                        placeholder: "City",
                                        required: !0,
                                        onChange: e.onChange
                                    })), r.a.createElement(K.a, {
                                        form: !0
                                    }, r.a.createElement(_.a, {
                                        md: 5
                                    }, r.a.createElement(ee.a, {
                                        className: "dropdown-container"
                                    }, r.a.createElement(ae.a, {
                                        for: "coCountry"
                                    }, "Country"), r.a.createElement(ie, null))), r.a.createElement(_.a, {
                                        md: 4
                                    }, r.a.createElement(ee.a, {
                                        className: "dropdown-container"
                                    }, r.a.createElement(ae.a, {
                                        for: "coState"
                                    }, "State"), r.a.createElement(oe, {
                                        onChange: e.onChange
                                    }))), r.a.createElement(_.a, {
                                        md: 3
                                    }, r.a.createElement(ee.a, null, r.a.createElement(ae.a, {
                                        for: "coZip"
                                    }, "Pin"), r.a.createElement(te.a, {
                                        className: "zip-input",
                                        type: "text",
                                        name: "co_zipcode",
                                        id: "coZipCode",
                                        placeholder: "Pin Code",
                                        required: !0,
                                        onChange: e.onChange
                                    })))), r.a.createElement(ee.a, null, r.a.createElement(te.a, {
                                        type: "phone",
                                        name: "co_phone",
                                        id: "coPhone",
                                        placeholder: "Phone (For Shipping Updates)",
                                        required: !0,
                                        onChange: e.onChange,
                                        minLength: 10,
                                        maxLength: 10
                                    })), r.a.createElement(ee.a, {
                                        tag: "fieldset"
                                    }, r.a.createElement("legend", null, "Shipping Options"), r.a.createElement("div", null, r.a.createElement(ae.a, {
                                        check: !0
                                    }, r.a.createElement(te.a, {
                                        type: "radio",
                                        value: 1,
                                        name: "radio1",
                                        checked: !0
                                    }), "Rs. 79 Standard Shipping", r.a.createElement("br", null), r.a.createElement("span", null, "3-6 Days | "), r.a.createElement("span", null, "Free delivery on order above Rs.1000"))), r.a.createElement("br", null), r.a.createElement("br", null)), r.a.createElement(ne.a, null, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "#"), r.a.createElement("th", null, "Product"), r.a.createElement("th", null, "Qty"), r.a.createElement("th", null, "Amount"))), r.a.createElement("tbody", null, a.map((function(a, n) {
                                        for (var i = t.itemsInCart[a], o = i.qty, l = i.title, c = i.price, s = [], m = i.maxQty - 1; m >= 0;) s[m] = null, m--;
                                        return r.a.createElement("tr", null, r.a.createElement("th", {
                                            scope: "row"
                                        }, n + 1), r.a.createElement("td", null, l), r.a.createElement("td", null, r.a.createElement(te.a, {
                                            type: "select",
                                            name: "selectMulti",
                                            id: "exampleSelectMulti",
                                            onChange: function(n) {
                                                return e.qtyChange(n, t.addToCart, a)
                                            }
                                        }, s.map((function(e, t) {
                                            var a = t + 1 === o;
                                            return r.a.createElement("option", {
                                                selected: a
                                            }, t + 1)
                                        })))), r.a.createElement("td", null, "\u20b9", " " + c * o + "  ", r.a.createElement(se.a, {
                                            icon: ce.b,
                                            onClick: function() {
                                                return e.remove(t.addToCart, a)
                                            }
                                        })))
                                    })))), r.a.createElement(K.a, {
                                        className: "mt-3"
                                    }, r.a.createElement(E.a, {
                                        color: "primary"
                                    }, r.a.createElement("h6", null, "Proceed To Payment")))) : r.a.createElement(d.Link, {
                                        style: {
                                            color: "#007bff!important",
                                            marginTop: "8px",
                                            textDecoration: "underline",
                                            textAlign: "center"
                                        },
                                        to: "/list",
                                        className: "mt-2"
                                    }, r.a.createElement("img", {
                                        src: "toyskart.in/empty_cart.png",
                                        width: 200,
                                        height: 200,
                                        alt: "empty cart",
                                        style: {
                                            display: "block",
                                            margin: "auto"
                                        }
                                    }), r.a.createElement("h6", {
                                        className: "mt-2 ml-2"
                                    }, "Go To Shopping"))
                                }))))
                            })))
                        }
                    }]), t
                }(r.a.Component),
                ue = Object(le.k)(me),
                de = a(93),
                pe = a(91),
                he = a(92),
                ge = a(47),
                Ee = a.n(ge),
                fe = a(48),
                ye = a.n(fe),
                ve = a(49),
                be = a.n(ve),
                Ce = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", null, r.a.createElement(V.a, {
                                className: "mt-3 mb-4"
                            }, r.a.createElement(K.a, null, r.a.createElement("div", {
                                className: "mt-1 rounded",
                                style: {
                                    background: "black",
                                    width: "100%"
                                }
                            }, r.a.createElement(de.a, {
                                style: {
                                    maxWidth: "100%"
                                }
                            }, r.a.createElement(pe.a, null, r.a.createElement("p", null, "Total Amount Due")), r.a.createElement(he.a, null, r.a.createElement("p", null, "\u20b9 ", " ", "\u200b", r.a.createElement(g.ProductConsumer, null, (function(e) {
                                var t = e.getTotalAmount();
                                return t ? t < 1e3 ? (localStorage.setItem("totalPrice", t + 79), t = t + 79 + " (Including Shipping)") : (localStorage.setItem("totalPrice", t), t + " (Free Shipping)") : "--"
                            }))))))), r.a.createElement("div", {
                                className: "mb-4 mt-4"
                            }, r.a.createElement("span", null, "Customer Reviews")), r.a.createElement(K.a, null, r.a.createElement(_.a, {
                                xs: "3",
                                className: "no-pr"
                            }, r.a.createElement(V.a, {
                                className: "avatar-container"
                            }, r.a.createElement("img", {
                                className: "avatar img-fluid",
                                src: Ee.a,
                                alt: "Avatar1 review thumb"
                            }))), r.a.createElement(_.a, {
                                xs: "9"
                            }, r.a.createElement("div", {
                                className: "review-container"
                            }, r.a.createElement("p", {
                                className: "title-p"
                            }, r.a.createElement("strong", null, "Awesome product and fast delivery")), r.a.createElement("div", {
                                className: "star-rate"
                            }, r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            })), r.a.createElement("div", {
                                className: "co-verified-buyer"
                            }, r.a.createElement("span", {
                                className: "text-danger"
                            }, "Verified Buyer"), r.a.createElement("span", {
                                className: "float-right"
                            }, "2020-07-21")), r.a.createElement("div", {
                                className: "co-review-desc"
                            }, r.a.createElement("p", null, "Received my puzzle board super fast!!!"))))), r.a.createElement(K.a, null, r.a.createElement(_.a, {
                                className: "no-pr",
                                xs: "3"
                            }, r.a.createElement(V.a, {
                                className: "avatar-container"
                            }, r.a.createElement("img", {
                                className: "avatar img-fluid",
                                src: ye.a,
                                alt: "Avatar2 review thumb"
                            }))), r.a.createElement(_.a, {
                                xs: "9"
                            }, r.a.createElement("div", {
                                className: "review-container"
                            }, r.a.createElement("p", {
                                className: "title-p"
                            }, r.a.createElement("strong", null, "Nice customer service")), r.a.createElement("div", {
                                className: "star-rate"
                            }, r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            })), r.a.createElement("div", {
                                className: "co-verified-buyer"
                            }, r.a.createElement("span", {
                                className: "text-danger"
                            }, "Verified Buyer"), r.a.createElement("span", {
                                className: "float-right"
                            }, "2020-07-21")), r.a.createElement("div", {
                                className: "co-review-desc"
                            }, r.a.createElement("p", null, "They are excellent in customer satisfaction"))))), r.a.createElement(K.a, null, r.a.createElement(_.a, {
                                className: "no-pr",
                                xs: "3"
                            }, r.a.createElement(V.a, {
                                className: "avatar-container"
                            }, r.a.createElement("img", {
                                className: "avatar img-fluid",
                                src: be.a,
                                alt: "Avatar3 review thumb"
                            }))), r.a.createElement(_.a, {
                                xs: "9"
                            }, r.a.createElement("div", {
                                className: "review-container"
                            }, r.a.createElement("p", {
                                className: "title-p"
                            }, r.a.createElement("strong", null, "Good price and selection")), r.a.createElement("div", {
                                className: "star-rate"
                            }, r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            }), r.a.createElement(se.a, {
                                icon: ce.a
                            })), r.a.createElement("div", {
                                className: "co-verified-buyer"
                            }, r.a.createElement("span", {
                                className: "text-danger"
                            }, "Verified Buyer"), r.a.createElement("span", {
                                className: "float-right"
                            }, "2020-07-24")), r.a.createElement("div", {
                                className: "co-review-desc"
                            }, r.a.createElement("p", null, "Like their hand picked collection.Keep it up!!")))))))
                        }
                    }]), t
                }(n.Component),
                Ne = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(s.a)(this, Object(m.a)(t).call(this, e))).state = {
                            data: ""
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "formChild1",
                        value: function(e) {
                            this.setState({
                                data: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement(V.a, null, r.a.createElement(K.a, null, r.a.createElement(_.a, {
                                className: "left-col-container",
                                md: "6",
                                style: {
                                    position: "relative"
                                }
                            }, r.a.createElement(ue, {
                                maxQty: 1,
                                qty: 1
                            }), r.a.createElement("br", null)), r.a.createElement(_.a, {
                                className: "right-col-container pb-4",
                                md: "6"
                            }, r.a.createElement(Ce, null))))
                        }
                    }]), t
                }(n.Component),
                ke = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", null, r.a.createElement(Ne, null))
                        }
                    }]), t
                }(n.Component),
                Oe = a(34),
                Se = a.n(Oe),
                je = a(50),
                xe = a(22),
                Ge = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(s.a)(this, Object(m.a)(t).call(this, e))).handleChange = function(e) {
                            a.setState(Object(xe.a)({}, e.target.name, e.target.value))
                        }, a.handleSubmit = function(e, t) {
                            return function() {
                                var n = Object(je.a)(Se.a.mark((function n(r) {
                                    var i, o, l, c;
                                    return Se.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r.preventDefault(), i = a.state, o = i.mobile, l = i.otp, "A" === o && "B" === l ? (e(!0), t("uuid", !0, 1)) : e(!1), JSON.stringify({
                                                    Param3: "Value3"
                                                }), n.next = 6, fetch("https://api.msg91.com/api/v5/otp?authkey=285417AUxhbQBNj5d2d9a0c&template_id=1&extra_param=%7B%22Param1%22%3A%22Value1%22%2C%20%22Param2%22%3A%22Value2%22%2C%20%22Param3%22%3A%20%22Value3%22%7D&mobile=919003178800");
                                            case 6:
                                                c = n.sent, console.log(c);
                                            case 8:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }()
                        }, a.state = {
                            mobile: "",
                            otp: ""
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.mobile,
                                n = t.otp;
                            return r.a.createElement(g.ProductConsumer, null, (function(t) {
                                return t.isloggedIn ? r.a.createElement(le.c, {
                                    to: "/list"
                                }) : r.a.createElement("form", {
                                    onSubmit: e.handleSubmit(t.setLogInStatus, t.setCookie),
                                    style: {
                                        position: "absolute",
                                        top: "25%",
                                        left: "50%",
                                        transform: "translate(-50%)"
                                    }
                                }, r.a.createElement("label", {
                                    htmlFor: "email"
                                }, "Mobile or Email"), r.a.createElement("input", {
                                    name: "mobile",
                                    type: "text",
                                    placeholder: "Enter your Mobile number or Email",
                                    value: a,
                                    onChange: e.handleChange
                                }), r.a.createElement("label", {
                                    htmlFor: "email"
                                }, "OTP"), r.a.createElement("input", {
                                    name: "otp",
                                    type: "text",
                                    placeholder: "Enter your OTP",
                                    value: n,
                                    onChange: e.handleChange
                                }), r.a.createElement("div", null, r.a.createElement("button", {
                                    type: "submit"
                                }, "Login"), r.a.createElement("button", {
                                    type: "button",
                                    style: {
                                        marginLeft: 10
                                    }
                                }, "Send OTP")))
                            }))
                        }
                    }]), t
                }(r.a.Component),
                Qe = (a(80), function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (a = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            isLoggedIn: !1
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", null, "This is landing page.", this.state.isLoggedIn ? r.a.createElement(le.c, {
                                to: "/list"
                            }) : r.a.createElement(le.c, {
                                to: "/login"
                            }))
                        }
                    }]), t
                }(n.Component)),
                Pe = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(s.a)(this, Object(m.a)(t).call(this, e))).setFlag = function(e) {
                            a.state.flag || (e.eraseCookie("products", !0), a.setState({
                                flag: !0
                            }))
                        }, a.state = {
                            flag: !1
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement(g.ProductConsumer, null, (function(t) {
                                return e.setFlag(t), r.a.createElement("div", {
                                    className: "container"
                                }, r.a.createElement("img", {
                                    src: "toyskart.in/img/sucess.png",
                                    width: 200,
                                    height: 200,
                                    alt: "success",
                                    className: "mt-4",
                                    style: {
                                        display: "block",
                                        margin: "0 auto"
                                    }
                                }), r.a.createElement("h3", {
                                    style: {
                                        textAlign: "center"
                                    }
                                }, "Thanks for Shopping with us !!"), r.a.createElement("p", {
                                    style: {
                                        textAlign: "center"
                                    }
                                }, r.a.createElement(d.Link, {
                                    to: "/list",
                                    style: {
                                        textDecoration: "underline"
                                    }
                                }, "Shop more")))
                            }))
                        }
                    }]), t
                }(n.Component),
                Ae = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(n.Fragment, null, r.a.createElement(f, null), r.a.createElement(le.g, null, r.a.createElement(le.d, {
                                exact: !0,
                                path: "/list",
                                component: k
                            }), r.a.createElement(le.d, {
                                path: "/details",
                                component: z
                            }), r.a.createElement(le.d, {
                                path: "/cart",
                                component: ke
                            }), r.a.createElement(le.d, {
                                path: "/login",
                                component: Ge
                            }), r.a.createElement(le.d, {
                                path: "/confirm",
                                component: Pe
                            }), r.a.createElement(le.d, {
                                path: "/",
                                component: Qe
                            }), r.a.createElement(le.d, {
                                component: X
                            })))
                        }
                    }]), t
                }(n.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(r.a.createElement(g.ProductProvider, null, r.a.createElement(d.BrowserRouter, null, r.a.createElement(Ae, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [54, 1, 2]
    ]
]);
//# sourceMappingURL=main.8185a97e.chunk.js.map
