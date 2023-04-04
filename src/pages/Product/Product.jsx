import React, { Component } from "react";
import "./Product.scss";
import Header from "../../components/Header/Header";
import images from "../../images/Images";
import addidas from "../../images/addidas.svg";
import color1 from "../../images/color1.png";
import color2 from "../../images/color2.png";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      quantity: 1,
      cartItems: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  handlePrevImage = () => {
    const index = this.state.selectedImage;
    if (index === 0) {
      this.setState((prevState) => ({ selectedImage: images.length - 1 }));
    } else {
      this.setState((prevState) => ({
        selectedImage: prevState.selectedImage - 1,
      }));
    }
  };

  handleNextImage = () => {
    const index = this.state.selectedImage;
    if (index === images.length - 1) {
      this.setState((prevState) => ({ selectedImage: 0 }));
    } else {
      this.setState((prevState) => ({
        selectedImage: prevState.selectedImage + 1,
      }));
    }
  };

  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  };

  increment = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  addToCart = () => {
    const { cartItems } = this.state;
    const newItem = {
      title:
        "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      price: "9,999",
      quantity: this.state.quantity,
      img: images[0],
    };
    this.setState({ cartItems: [...cartItems, newItem] });
  };

  render() {
    return (
      <div>
        <Header cartItems={this.state.cartItems} />

        <div className="product">
          <div className="top">
            <p>Men / Clothing / Tops / Adidas / Adidas Black T-Shirt</p>
          </div>
          <hr />
          <div className="middle">
            <div className="left">
              <div className="mainImg">
                <div className="rotateIcon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/360.svg"}
                    alt=""
                  />
                </div>

                <img src={images[this.state.selectedImage]} alt="" />
              </div>
              <div className="images">
                <img
                  className="arrow"
                  src={process.env.PUBLIC_URL + "/images/arrowLeftL.svg"}
                  alt=""
                  onClick={this.handlePrevImage}
                />
                <div className="imgIcon">
                  <img
                    src={images[0]}
                    alt=""
                    onClick={() => {
                      this.setState({ selectedImage: 0 });
                    }}
                  />
                </div>
                <div className="imgIcon">
                  <img
                    src={images[1]}
                    alt=""
                    onClick={() => {
                      this.setState({ selectedImage: 1 });
                    }}
                  />
                </div>
                <div className="imgIcon">
                  <img
                    src={images[2]}
                    alt=""
                    onClick={() => {
                      this.setState({ selectedImage: 2 });
                    }}
                  />
                </div>
                <div className="imgIcon">
                  <img
                    src={images[3]}
                    alt=""
                    onClick={() => {
                      this.setState({ selectedImage: 3 });
                    }}
                  />
                </div>
                <img
                  className="arrow"
                  src={process.env.PUBLIC_URL + "/images/arrowRightL.svg"}
                  alt=""
                  onClick={this.handleNextImage}
                />
              </div>
            </div>
            <div className="right">
              <img className="logo" src={addidas} alt="" />
              <div className="title">
                <h4>
                  Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit.
                </h4>
                <p>Men</p>
              </div>

              <div className="rate">
                <div className="images">
                  <img
                    src={process.env.PUBLIC_URL + "/images/starYellow.svg"}
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/starYellow.svg"}
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/starYellow.svg"}
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/starYellow.svg"}
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/starWite.svg"}
                    alt=""
                  />
                </div>
                <h4>4.9 of 5</h4>
                <p>22 Rates</p>
              </div>

              <div className="price">
                <h4>
                  9,999 <span>LE</span>{" "}
                </h4>
                <p>9,999 LE</p>
                <span className="sale">30% Off</span>
              </div>

              <div className="desc">
                <h4>Size</h4>
                <div className="items size">
                  <p>Small</p>
                  <p>Medium</p>
                  <p>Large</p>
                  <p>X Large</p>
                  <p>XX Large</p>
                </div>
              </div>

              <div className="desc">
                <h4>Color</h4>
                <div className="items color">
                  <img src={color1} alt="" />
                  <img src={color2} alt="" />
                </div>
              </div>

              <div className="desc quantity">
                <h4>Quantity</h4>
                <div className="items btn">
                  <button onClick={this.decrement}>-</button>
                  <p>{this.state.quantity}</p>
                  <button onClick={this.increment}>+</button>
                </div>
              </div>

              <div className="btns">
                <button onClick={this.addToCart}>Add To Cart</button>
                <button>Pickup From Store</button>
              </div>
            </div>
          </div>
          <div className="bottom">
            <FeaturedProducts type={"Similar"} />
          </div>
        </div>
      </div>
    );
  }
}
