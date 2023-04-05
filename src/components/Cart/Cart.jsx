import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  state = {
    open: true,
  };

  closeCart = () => {
    this.setState((prevState) => ({ open: false }));
  };

  render() {
    const { cartItems } = this.props;

    const totalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total.toLocaleString("en-US", { minimumFractionDigits: 2 });
    };

    return (
      <>
        {this.state.open && (
          <div className="cart">
            <div className="wrapper">
              <img
                className="close"
                src={process.env.PUBLIC_URL + "/images/close.png"}
                alt=""
                onClick={this.closeCart}
              />
              <h1>My Cart</h1>
              <h3>Cart Summary</h3>

              {cartItems?.map((item) => (
                <div className="item" key={item.id}>
                  <div className="details">
                    <div className="left">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="right">
                      <h4>{item.title}</h4>

                      <div className="desc">
                        <div className="info">
                          <h5>Quantity: {item.quantity}</h5>
                          <h4>
                            {item.price} <span>LE</span>{" "}
                          </h4>
                        </div>
                        <button>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <h2>
                Total: <span>{totalPrice()}</span> LE
              </h2>

              <div className="btns">
                <button>Review Cart</button>
                <button>Complete Checkout</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
