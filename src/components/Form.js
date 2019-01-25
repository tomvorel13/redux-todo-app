import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todosActions";

class Form extends Component {
  state = {
    title: "",
    text: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addHandler = e => {
    e.preventDefault();
    const { title, text } = this.state;
    const newTodo = {
      title,
      text
    };

    this.props.addTodo(newTodo);
  };

  render() {
    const { title, text } = this.state;
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.addHandler}>
          <div>
            <label>Title:</label>
            <br />
            <input
              onChange={this.onChangeHandler}
              value={title}
              type="text"
              name="title"
            />
          </div>
          <div>
            <label>Text:</label>
            <br />
            <input
              onChange={this.onChangeHandler}
              value={text}
              type="text"
              name="text"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addTodo }
)(Form);
