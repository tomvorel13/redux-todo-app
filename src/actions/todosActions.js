import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from "../constants";

export const getTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS
  });
};

export const addTodo = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

export const removeTodo = newTodos => dispatch => {
  dispatch({
    type: REMOVE_TODO,
    payload: newTodos
  });
};
