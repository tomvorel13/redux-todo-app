import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { removeTodo } from "../actions/todosActions";

const Todo = ({ todo, todos, removeTodo }) => {
  const onRemove = () => {
    const currId = todo.id;
    const newTodos = todos.filter(todo => todo.id !== currId);
    removeTodo(newTodos);
  };

  return (
    <Wrap>
      <h1>{todo.title}</h1>
      <p>{todo.text}</p>
      <Cancel onClick={onRemove}>×</Cancel>
    </Wrap>
  );
};

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(
  mapStateToProps,
  { removeTodo }
)(Todo);

// STYLES
const Wrap = styled.div`
  border-top: 1px solid darkgrey;
  width: 50%;
  position: relative;
`;

const Cancel = styled.span`
  position: absolute;
  font-size: 150%;
  right: 3px;
  top: 3px;

  &:hover {
    cursor: pointer;
  }
`;
