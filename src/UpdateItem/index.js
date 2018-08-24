import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      user_name_id: "",
      category_id: "",
      name: "",
      description: "",
      price: "",
      condition: "",
      quantity: "",
      img_url: "",
      userEmail: "",
      userPhone: "",
      userLongitude: "",
      userLatitude: "",
      category: [],
      updated: false
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log('got id:', id);
    fetch('/categories.json')
      .then(response => response.json())
      .then(category => {
        console.log(category);
        this.setState({
          category: category
        })
      })
    fetch(`/item/update/${id}.json`)
      .then(response => response.json())
      .then(item => {
        console.log(item);
        this.setState({
          id: id,
          user_name_id: item.user.username,
          category_id: item.category.id,
          name: item.item.name,
          description: item.item.description,
          price: item.item.price,
          condition: item.item.condition,
          quantity: item.item.quantity,
          img_url: item.item.img_url,
          userEmail: item.user.email,
          userPhone: item.user.phone_number,
          userLongitude: item.user.longitude,
          userLatitude: item.user.latitude,
        });
      });

  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);


  }

  onFormSubmit(evt) {
    evt.preventDefault()
    const updateItem = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      quantity: this.state.quantity,
      img_url: this.state.img_url,
      category: this.state.category,
      category_id: this.state.category_id,
      updated: this.state.updated
    }
    console.log('onFormSubmit:', updateItem);

    fetch(`/item/update/${this.state.id}.json`, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify(updateItem),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(item => {
        console.log('state set to update');
        this.setState({
          updated: true
        });
      });
  }

  render() {

    if (this.state.updated === true) {
      let id = this.props.match.params.id;
      return <Redirect to={`/items/${id}`} />;
    }

    return (
      <div className="updateItem">
      <h3>Update Item</h3>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <select name="category_id">
            {this.state.category.map((category, index) => {
              return <option
                key={index}
                value={category.id}
                selected={this.state.category_id === category.id ? 'selected' : ''}
              >
                {category.name}
              </option>
            })}
          </select>
          <p>
            <label for="name">Item Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
            />
          </p>
          <p>
            <label for="description">Item Description</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
            />
          </p>
          <p>
            <label for="price">Price</label>
            <input
              type="text"
              name="price"
              placeholder="price"
              value={this.state.price}
            />
          </p>
          <p>
            <label for="condition">Condition</label>
            <input
              type="text"
              name="condition"
              placeholder="condition"
              value={this.state.condition}
            />
          </p>
          <p>
            <label for="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              value={this.state.quantity}
            />
          </p>
          <p>
            <label for="img_url">Image Link</label>
            <input
              type="text"
              name="img_url"
              placeholder="Image URL"
              value={this.state.img_url}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateItem;
