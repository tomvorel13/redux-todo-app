import React, { Component } from "react";
import { connect } from "react-redux";

import { clearTodos } from "../actions/todosActions";
import Todo from "./Todo";

class Todos extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps) {
      this.props.todos.unshift(nextProps);
    }
  }

  onClearTodos = () => {
    this.props.clearTodos();
  };

  render() {
    const { todos } = this.props;
    return (
      <>
        <button onClick={this.onClearTodos}>Clear Todos</button>
        <div>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(
  mapStateToProps,
  { clearTodos }
)(Todos);
