import React, { Component } from "react";
import {GoogleApiWrapper} from 'google-maps-react';
import Category from '../Category';
import MapContainer from "../MapContainer";
import "./style.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('/categories.json')
      .then(response => response.json())
      .then(categories => {
        this.setState({
          categories: categories
        });
      });
  }

  render() {
    return (
      <div className="Categories">
        <div className="category-details">
          {this.state.categories.map(category => {
            return <Category
              id={category.id}
              img_url={category.img_url}
              name={category.name}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
