import React, { Component } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import rotateIcon from "../../images/360.svg";

export default class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <Link className="link" to={`/task-nasnav`}>
        <div className="card">
          <div className="images">
            <img className="rotateIcon" src={rotateIcon} alt="" />
            <img className="mainImg" src={item.img} alt="" />
          </div>
          <h4>{item.title}</h4>

          <div className="prices">
            <div className="left">
              <h4>
                {item.price} <span> LE</span>
              </h4>
              {item.sale && (
                <div className="oldPrice">
                  <h5>{item.oldPrice} lE</h5>
                  <p>{item.sale}</p>
                </div>
              )}
            </div>
            <div className="right">
              <img src={item.logo} alt="" />
            </div>
          </div>

          <div className="rate">
            <div className="icons">
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
            <h5>4.2 of 5</h5>
          </div>

          <div className="shipping">
            {item.shipping ? (
              <div className="details">
                <h5>
                  From: <span>{item.from}</span>{" "}
                </h5>
                <h5>
                  To: <span>{item.to}</span>{" "}
                </h5>
                <h5>
                  in: <span>{item.in}</span>{" "}
                </h5>
              </div>
            ) : (
              <h5>
                Pickup From: <span>{item.from}</span>
              </h5>
            )}
          </div>
        </div>
      </Link>
    );
  }
}
