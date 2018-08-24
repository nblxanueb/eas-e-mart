import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {GoogleApiWrapper} from 'google-maps-react';
import Item from '../Item';
import MapContainer from "../MapContainer";
import "./style.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/items.json')
      .then(response => response.json())
      .then(items => {
        this.setState({
          items: items
        });
      });
  }

  render() {
    return (
      <div className="Items">
        <div className="item-details">

          {this.state.items.map((item, i) => {
            console.log(item)
            return <Item
              key={i}
              id={item.id}
              img_url={item.img_url}
              name={item.name}
              price={item.price}
              description={item.description}
              condition={item.condition}
              quantity={item.quantity}
            />
          })}
        </div>

      </div>
    );
  }
}

export default Items;
