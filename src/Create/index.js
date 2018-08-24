import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      condition: '',
      quantity: '',
      img_url: '',
      category_id: '',
      category: [],
      created: false
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/categories.json')
      .then(response => response.json())
      .then(category => {
        console.log(category);
          this.setState({
          category: category
        })
      })
  }


  onFormChange(evt) {
    const element = evt.target
    const name = element.name
    const value = element.value
    const newState = {}
    newState[name] = value
    this.setState(newState)

  }

  onFormSubmit(evt) {
    evt.preventDefault()
    const newItem = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      quantity: this.state.quantity,
      img_url: this.state.img_url,
      category: this.state.category,
      category_id: this.state.category_id
    }
    console.log('onFormSubmit:', newItem);

    fetch('/item/create.json', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(newItem => {
      console.log('fetch post:',newItem);
      this.setState({
        created: true
      })
    })
  }
  render() {
    if (this.state.created === true) {
      // let id = this.props.match.params.id;
      return <Redirect to="/items" />;
    }
    return (
      <div className="createItem">
        <h3>List New Item</h3>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <select name="category_id">
            {this.state.category.map((category, index) => {
                        <label for="name">Item Name</label>

              return <option value={category.id}>{category.name}</option>
            })}
          </select>
          <br></br>
          <label for="name">Item Name: </label>
          <input type='text' name='name' placeholder='name' value={this.state.name} />
          <br></br>
          <label for="name">Item Description: </label>
          <input type='text' name='description' placeholder='description' value={this.state.description} />
          <br></br>
          <label for="name">Price: </label>
          <input type='text' name='price' placeholder='price' value={this.state.price} />
          <br></br>
          <label for="name">Condition: </label>
          <input type='text' name='condition' placeholder='condition' value={this.state.condition} />
          <br></br>
          <label for="name">Quantity: </label>
          <input type='text' name='quantity' placeholder='quantity' value={this.state.quantity} />
          <br></br>
          <label for="name">Image Link: </label>
          <input type='text' name='img_url' placeholder='img url' value={this.state.img_url} />
          <br></br>
          <button type='submit'><img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Add-File-icon.png" className="create-icon" alt="create"/></button>
        </form>
      </div>
    );
  }
}

export default Create;
