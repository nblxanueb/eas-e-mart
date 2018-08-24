import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';
import "./style.css";
import LoginPage from "../LoginPage";
import Create from "../Create";
import Items from "../Items";
import Item from "../Item";
import Categories from "../Categories";
import Category from "../Category";
import CategoryItem from "../CategoryItem";
import ItemsPage from "../ItemsPage";
import UpdateItem from "../UpdateItem";
import UserItems from "../UserItems";
import logo from "../logo.png";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">

          <div className="header">
            <div className="empty-div">
            </div>
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="Login">
              <Link to="/login" className="login">LogIn</Link>
            </div>
          </div>
          <nav>
            <Link className="home" to="/">Home</Link>
            <Link className="items" to="/items">All Items</Link>
            <Link className="create" to="/item/create">Create Item</Link>
            <Link className="my-postings" to={`/user/item`}>My Postings</Link>
          </nav>


            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/items" exact component={Items} />
            <Route path="/item/create" exact component={Create} />
            <Route path="/item/update/:id" exact component={UpdateItem} />
            <Route path="/items/:id" exact component={ItemsPage} />
            <Route path="/categories/items/:id" exact component={CategoryItem} />
            <Route path="/user/item" exact component={UserItems} />
          </div>
          <footer>
          <h4>EAS => ( <a href="https://www.linkedin.com/in/elyas-sow/" className="footer-name">Elyas</a> [0].concat ( <a href="https://www.linkedin.com/in/andrey-pykhantsev/" className="footer-name">Andrey</a> [0].concat( <a href="https://www.linkedin.com/in/preet-s-singh/" className="footer-name">Supreet</a> [0]))         2018 ©</h4>
          </footer>
        </div>
      </Router>
    );
  }
}


export default App;
