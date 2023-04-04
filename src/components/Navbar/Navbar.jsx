import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
// import logo from "../../../public/images/logoBlack.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item bar">
            <img src={process.env.PUBLIC_URL + "/images/Bar.png"} alt="bar" />
          </div>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/logoBlack.svg"}
              alt="logo"
            />
          </div>
        </div>
        <div className="center">
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/arrowLeftS.svg"}
              alt=""
            />
          </div>
          <div className="item">
            <p>
              Valentine’s Day Offers! Buy Two Get One Free {""}
              <span>
                <Link className="linkShop" to="/">
                  Shop Now
                </Link>
              </span>
            </p>
          </div>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/arrowRightS.svg"}
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/phone.svg"}
              alt="contact us"
            />
            <Link className="link">Contact Us</Link>
          </div>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/cartOrder.svg"}
              alt="contact us"
            />
            <Link className="link">Track Order</Link>
          </div>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/location.svg"}
              alt="contact us"
            />
            <Link className="link">Find A Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
