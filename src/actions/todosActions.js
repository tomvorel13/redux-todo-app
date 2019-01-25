import { ADD_TODO, FETCH_TODOS } from "../constants";

export const getTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS
  });
};

export const addTodo = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    title: todo.title,
    text: todo.text
  });
};
