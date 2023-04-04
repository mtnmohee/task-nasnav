import React, { Component } from "react";
import "./Header.scss";
import Cart from "../Cart/Cart";

export default class Header extends Component {
  state = {
    open: false,
  };

  showCart = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const { cartItems } = this.props;

    return (
      <div className="header">
        <div className="wrapper">
          <div className="top">
            <div className="left">
              <img src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="center">
              <img
                src={process.env.PUBLIC_URL + "/images/addidas.svg"}
                alt=""
              />
            </div>
            <div className="right">
              <div className="item">
                <div className="cartIcon" onClick={this.showCart}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/cart.svg"}
                    alt=""
                  />
                  <span>{cartItems.length}</span>
                </div>
                <h4 onClick={this.showCart}>Cart</h4>
              </div>
              <div className="item">
                <img
                  src={process.env.PUBLIC_URL + "/images/favorite.svg"}
                  alt=""
                />
                <h4>Wishlist</h4>
              </div>
              <div className="item">
                <img src={process.env.PUBLIC_URL + "/images/user.svg"} alt="" />
                <h4>Login</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <h4>Men</h4>
            <h4>Women</h4>
            <h4>Unisex</h4>
            <h4>Kids</h4>
            <h4>Best Sellers</h4>
            <h4>New Arrivals</h4>
            <h4>Offers</h4>
          </div>
        </div>

        {this.state.open && <Cart cartItems={cartItems} />}
      </div>
    );
  }
}
