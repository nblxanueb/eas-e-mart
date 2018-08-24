import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <div className="image-wrapper">
          <Link to={`/categories/items/${this.props.id}.json`}>
            <img src={this.props.img_url} alt='picture of Category'/></Link>
        </div>
        <div className="Categories-details">
          <h3><Link to={`/categories/items/${this.props.id}.json`}>
            {this.props.name}</Link></h3>
        </div>
      </div>
    );
  }
}

export default Categories;
