import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

class Todos extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps) {
      this.props.todos.unshift(nextProps);
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps)(Todos);
