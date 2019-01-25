import React, { Component } from "react";
import { connect } from "react-redux";

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
        {(todos || []).map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps)(Todos);
