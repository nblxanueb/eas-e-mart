import React, { Component } from "react";
import "./style.css";
import Categories from "../Categories";

class HomePage extends Component {

  render() {
    return (
      <div className="HomePage">
        <div className="container">
          <div className="grid">
            <Categories />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
