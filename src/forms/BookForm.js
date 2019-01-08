import React, { Component } from "react";

import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";
class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      color: ""
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    bookStore.addBook(this.state, this.props.authorID);
  }
  render() {
    return (
      <div className="mt-5">
        <h1>{bookStore.statusMessage}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Book Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              name="title"
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <select name="color" onChange={this.onTextChange}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="purple">Purple</option>
              <option value="grey">Grey</option>
              <option value="orange">Orange</option>
            </select>
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(BookForm);
