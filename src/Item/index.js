// Elyas claimed this page

import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="image-wrapper">
        {/* image of the item link to item page*/}
        <Link to={`/items/${this.props.id}`}>
          <img className="item-page-image" src={this.props.img_url} alt='picture of item'/></Link>
        </div>
        <div className="Items-details">
          <h3><Link to={`/items/${this.props.id}`}>
          {console.log(this.props.id)}
          {this.props.name}</Link></h3>
          <p className="price">${this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Item;
