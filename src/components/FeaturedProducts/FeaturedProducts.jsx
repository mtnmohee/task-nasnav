import React, { Component } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import data from "../../services/dummyData";

export default class FeaturedProducts extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} Products</h1>
          <p>You may like these products also</p>
        </div>
        <div className="bottom">
          {data.map((item) => (
            <Card className="card" item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
