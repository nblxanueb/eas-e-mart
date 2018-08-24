import React, { Component } from "react";
import { GoogleApiWrapper } from 'google-maps-react';
import Category from '../Category';
import Item from '../Item';
import MapContainer from "../MapContainer";
import "./style.css";
import LoginPage from "../LoginPage";

class UserItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(`/user/item.json`, {
      method: "GET",
      credentials: 'include',
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(items => {
        console.log('state set to update');
        this.setState({
          items: items
        });
      });
  }

  render() {
    return (
      <div className="UserItem">
        <div className="item-detail">
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
              category_id={item.category_id}
              user_name_id={item.user_name_id}
            />
          })}
        </div>
        {/* <div className="item-map">
          <MapContainer google={this.props.google} />
        </div> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCeTdCRweKINV2rVaMeM8LSSFMewLhUAXI')
})(UserItems)
